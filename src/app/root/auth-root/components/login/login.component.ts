import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormControl, Validator, Validators } from '@angular/forms';
import { Store, select } from '@ngrx/store';
import { AppActions, ACT_USER_AUTH } from '../../../../shared/redux/ngrx/actions/app.actions';
import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { CreateUserAuthRequest } from '../../../../shared/models/model-requests/request-users/create-user-auth-request';
import { CreateUserAuthResponse } from '../../../../shared/models/model-responses/response-users/create-user-auth-response';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {


  constructor(
    private createUserAuthStore: Store<AppActions>,
    private router: Router
  ) {
    this.createUserAuthStoreObs = this.createUserAuthStore.pipe(
      select('stateCreateUserAuth')
    );
  }
  // Use to subscribe state in store
  private createUserAuthStoreObs: Observable<AppActions>;

  private createUserAuthStoreSub: Subscription;

  // initial login form
  public loginForm: {
    user_id: FormControl,
    user_pwd: FormControl
  };

  // Use to error Message
  public errorMessage: string;

  // Use to check message required
  public isCheckValid = false;

  //
  public isChecked: boolean;

  //
  private createUserAuthRequest: CreateUserAuthRequest;

  //
  public userId: string;



  ngOnInit() {
    this.loginForm = {
      user_id: new FormControl('', [
        Validators.required,
        Validators.maxLength(20)
      ]),
      user_pwd: new FormControl('', [
        Validators.required
      ])
    };
    this.createUserAuthStoreSub = this.createUserAuthStoreObs
      .subscribe(
        (action: AppActions) => {
          switch (action.type) {
            case ACT_USER_AUTH.CREATE_USER_AUTH: {
              let createUserAuthRequest: CreateUserAuthRequest;
              createUserAuthRequest = action.payload;
              this.userId = createUserAuthRequest.user_id;
              break;
            }
            case ACT_USER_AUTH.CREATE_USER_AUTH_SUCCESS: {
              let createUserAuthResponse: CreateUserAuthResponse;
              createUserAuthResponse = action.payload;
              if (createUserAuthResponse.status_code === '0') {
                localStorage.setItem(
                  'menu_items',
                  JSON.stringify(createUserAuthResponse.data.permissions) ? JSON.stringify(createUserAuthResponse.data.permissions) : ''
                );
                localStorage.setItem('access_token', createUserAuthResponse.data.access_token);
                localStorage.setItem('refresh_token', createUserAuthResponse.data.refresh_token);
                localStorage.setItem('user_id', this.userId);
                this.router.navigate(['/app']);

              } else if (createUserAuthResponse.status_code === '1010') {
                this.router.navigate(['/auth/change-password', {
                  user_id: this.createUserAuthRequest.user_id
                }]);

              } else {
                this.errorMessage = createUserAuthResponse.message;
              }
              break;
            }
            case ACT_USER_AUTH.CREATE_USER_AUTH_ERROR: {
              break;
            }
            default:
              break;
          }
        }
      );
  }

  onListenCreateAuth(e) {
    if (e.which === 13) {
      this.onLoginUserAuth();
    }
  }

  onForgotPassword() {
    this.router.navigate(['/auth/forgot-password']);
  }

  onLoginUserAuth() {
    this.isCheckValid = true;
    if (this.loginForm.user_id.valid && this.loginForm.user_id.valid) {
      this.createUserAuthRequest = {
        user_id: this.loginForm.user_id.value,
        user_pwd: this.loginForm.user_id.value
      };
      this.createUserAuthStore.dispatch(
        {
          type: ACT_USER_AUTH.CREATE_USER_AUTH,
          payload: this.createUserAuthRequest
        }
      );
    }
  }

  ngOnDestroy() {
    if (this.createUserAuthStoreSub) {
      this.createUserAuthStoreSub.unsubscribe();
      this.createUserAuthStore.dispatch({
        type: ACT_USER_AUTH.RESET_STATE
      });
    }
  }
}
