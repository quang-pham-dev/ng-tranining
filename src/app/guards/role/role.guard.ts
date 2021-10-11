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

import { Roles } from '@app/store/user';
export { Roles } from '@app/store/user';

type Role = Roles.Employee | Roles.Recruiter;

export interface GuardData {
    roles: Role[];
}

@Injectable({
    providedIn: 'root'
})
export class RoleGuard implements CanActivate, CanActivateChild, CanLoad {

    constructor(private router: Router, private store: Store<fromRoot.State>) {
    }

    private check(allowedRoles: string[]): Observable<boolean> {
        return this.store.pipe(select(fromUser.getUser)).pipe(
            take(1),
            map(user => {
                return allowedRoles.includes(user.roleId);
            }),
            tap(isAllowed => {
                if (!isAllowed) {
                    this.router.navigate(['/']);
                }
            })
        );
    }

    canActivate(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
        return this.check(next.data.roles);
    }
    canActivateChild(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
        return this.check(next.data.roles);
    }
    canLoad(
        route: Route,
        segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean {
        return this.check(route.data.roles);
    }
}
