ng generate guard auth


 Implement the Guard
In auth.guard.ts, you'll notice several interfaces that a guard can implement: CanActivate, CanActivateChild, CanDeactivate, and CanLoad. For this example, we'll use CanActivate.

typescript
Copy code
import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  CanActivate,
  Router
} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
    const isAuthenticated = false; // This should come from an authentication service

    if (!isAuthenticated) {
      this.router.navigate(['/login']); // Redirect to login if not authenticated
      return false;
    }
    return true;
  }
}
For this simple example, isAuthenticated is hardcoded to false. In a real-world scenario, you'd get this value from an authentication service.

3. Apply the Guard to a Route
In your routing module (usually app-routing.module.ts), you can apply the guard to specific routes:

typescript
Copy code
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth.guard'; // Adjust the path if necessary

const routes: Routes = [
  {
    path: 'protected',
    component: ProtectedComponent,
    canActivate: [AuthGuard]
  },
  // ... other routes
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
Now, when you try to navigate to the /protected route, the AuthGuard will be invoked. If isAuthenticated is false, you'll be redirected to /login.

Router guards in Angular provide a powerful way to control navigation based on conditions.
 They're especially useful for scenarios like authentication, role-based authorization, and preventing navigation away from a form with unsaved changes.




