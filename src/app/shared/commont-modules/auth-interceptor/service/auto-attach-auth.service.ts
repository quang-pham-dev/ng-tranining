import { Injectable, Injector } from '@angular/core';
import {
  HttpEvent,
  HttpInterceptor,
  HttpRequest,
  HttpHeaders,
  HttpHandler,
  HttpSentEvent,
  HttpHeaderResponse,
  HttpProgressEvent,
  HttpResponse,
  HttpUserEvent,
  HttpErrorResponse
} from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { catchError, switchMap, filter, take, finalize } from 'rxjs/operators';
import { Router } from '@angular/router';
import { RenewTokenResponse } from '../../../models/model-responses/response-users/renew-token-response';
import { UsersService } from '../../../services/common-services/users.service';
import { MOCK_API } from '../../../constant/mock_api_contants';

@Injectable()
export class AutoAttachAuthService implements HttpInterceptor {

  isRefreshingToken = false;
  tokenSubject: BehaviorSubject<string> = new BehaviorSubject<string>(null);

  constructor(
    private injector: Injector,
    private router: Router,

  ) { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpSentEvent | HttpHeaderResponse | HttpProgressEvent | HttpResponse<any> | HttpUserEvent<any>> {

    return next.handle(this.addToken(req, localStorage.getItem('access_token'))).pipe(
      catchError(error => {
        if (error instanceof HttpErrorResponse && error.error.status_code === '1004') {
          switch ((<HttpErrorResponse>error).status) {
            case 500:
              return this.handleRefreshToken(req, next);
            case 401:
              return this.handleTokenValid(error);
          }
        }
        if (error instanceof HttpErrorResponse && error.error.status_code === ' 1005') {
          this.logOut();
        }
      })
    );
  }


  addToken(req: HttpRequest<any>, token: string): HttpRequest<any> {
    let headers: HttpHeaders = new HttpHeaders();

    headers = headers.append('Cache-Control', 'no-cache');
    headers = headers.append('Pragma', 'no-cache');
    headers = headers.append('Expries', 'Sat, 01 Jan 2000 00:00:00 GMT');

    if (!(req.url === MOCK_API.I_10_CREATE_USER_AUTH)) {
      headers = headers.append('access_token', token);
    }

    if (req.body instanceof File) {
      headers = headers.append('filename', req.body.name);
      headers = headers.append('Conten-Type', 'text-csv')
    }
    if ((req.url === MOCK_API.I_11_RENEWTOKEN)) {
      const refresh_token = localStorage.getItem('refresh_token');
      headers = headers.append('refresh_token', refresh_token);
    }

    return req.clone({
      headers: headers
    });
  }

  handleRefreshToken(req: HttpRequest<RenewTokenResponse>, next: HttpHandler) {
    if (!this.isRefreshingToken) {
      this.isRefreshingToken = true;

      this.tokenSubject.next(null);
      const userService = this.injector.get(UsersService);

      const reFreshToken = localStorage.getItem('refresh_token');

      return userService.renewToken().pipe(
        switchMap((newToken: RenewTokenResponse) => {

          localStorage.setItem('access_token', newToken.data.access_token);
          if (newToken.data.access_token) {
            this.tokenSubject.next(newToken.data.access_token);
            return next.handle(this.addToken(req, newToken.data.access_token));
          }
          return this.logOut();
        }),
        catchError(error => {
          return this.logOut();
        }),
        finalize(() => {
          this.isRefreshingToken = false;
        })
      );
    } else {
      return this.tokenSubject.pipe(
        filter(token => token != null),
        take(1),
        switchMap(token => {
          return next.handle(this.addToken(req, token));
        })
      )
    }
  }

  handleTokenValid(error) {
    if (error && error.status === 401) {
      return this.logOut();
    }
    return Observable.throw(error);
  }

  logOut() {
    localStorage.removeItem('access_token');
    localStorage.removeItem('refresh_token');
    this.router.navigate(['/auth']);
    return Observable.throw('LogOut');

  }
}
