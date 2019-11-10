import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanDeactivate, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable()
export class IsAuthGuard implements CanActivate, CanDeactivate<any>{

  constructor(
    private router: Router
  ) { }

  canActivate(): boolean {
    if (localStorage.getItem('access_token')) {
      this.router.navigate(['/app']);
      return true;
    } else {
      return true;
    }
  }

  canDeactivate(): boolean {
    if (localStorage.getItem('access_token')) {
      return true;
    } else {
      return false;
    }
  }
}
