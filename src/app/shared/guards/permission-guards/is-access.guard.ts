import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanDeactivate } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable()
export class IsAccessGuard implements CanActivate, CanDeactivate<any> {
  canActivate(): boolean {
    if (localStorage.getItem('access_token')) {
      return true;
    } else {
      return false;
    }
  }

  canDeactivate(): boolean {
    return true;
  }
}
