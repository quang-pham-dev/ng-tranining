import { Injectable } from '@angular/core';
import {
    CanActivate, CanActivateChild, CanLoad, Route, UrlSegment, ActivatedRouteSnapshot,
    RouterStateSnapshot, UrlTree, Router
} from '@angular/router';
import { Observable } from 'rxjs';
import { filter, map, take, tap } from 'rxjs/operators';

import { Store, select } from '@ngrx/store';
import * as fromRoot from '@app/store';
import * as fromUser from '@app/store/user';

@Injectable({
    providedIn: 'root'
})
export class UnauthGuard implements CanActivate, CanActivateChild, CanLoad {

    constructor(private router: Router, private store: Store<fromRoot.State>) {
    }

    private check(): Observable<boolean> {
        return this.store.pipe(select(fromUser.getUserState)).pipe(
            filter(state => !state.loading),
            take(1),
            tap(state => {
                if (state.uid) {
                    this.router.navigate(['/']);
                }
            }),
            map(state => !state.uid)
        );
    }

    canActivate(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
        return this.check();
    }
    canActivateChild(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
        return this.check();
    }
    canLoad(
        route: Route,
        segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean {
        return this.check();
    }
}
