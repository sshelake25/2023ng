import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MyauthGuard implements CanActivate {
  //programatic routing in application
  constructor(private router: Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    //  // allow user or restort // path
    //     return true;

    const isAuthenticated = true; // This should come from an authentication service

    if (!isAuthenticated) {
      this.router.navigate(['/patient-info']); // Redirect to login if not authenticated
      return false;
    }
    return true;
  }
}
