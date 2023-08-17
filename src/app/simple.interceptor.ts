import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
} from '@angular/common/http';
import { Observable, tap } from 'rxjs';

// constructor(private auth: AuthService) {}

// intercept(req: HttpRequest<any>, next: HttpHandler) {
//   // Get the auth token from the service.
//   const authToken = this.auth.getAuthorizationToken();

//   // Clone the request and replace the original headers with
//   // cloned headers, updated with the authorization.
//   const authReq = req.clone({
//     headers: req.headers.set('Authorization', authToken)
//   });

//   // send cloned request with header to the next handler.
//   return next.handle(authReq);
// }

@Injectable()
export class SimpleInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    

    // Clone the request and replace the original headers with
    // cloned headers, updated with the authorization.
    const authReq = request.clone({
      headers: request.headers.set('Authorization', 'ANCauthToken'),
    });

    return next.handle(authReq).pipe(
      tap(
        (event) => {
          if (event instanceof HttpResponse) {
            // Log the response when it comes back
            console.log('Response:', event);
          }

          // every request go thoght interceptor

          console.log(event);
        },
        (error) => {
          // Handle or log errors globally here
          console.error('Error:', error);
        }
      )
    );
  }
}
