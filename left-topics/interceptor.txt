

1. Create an Interceptor
Using the Angular CLI, you can manually create a file or just start writing. For this example, let's assume you're manually creating a file named simple.interceptor.ts.

typescript
Copy code
// simple.interceptor.ts

import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpResponse,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable()
export class SimpleInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // Log the incoming request
    console.log('Incoming Request:', request);

    return next.handle(request).pipe(
      tap(
        event => {
          if (event instanceof HttpResponse) {
            // Log the response when it comes back
            console.log('Response:', event);
          }
        },
        error => {
          // Handle or log errors globally here
          console.error('Error:', error);
        }
      )
    );
  }
}
2. Provide the Interceptor
Update your app module (or any specific module where you want to provide the interceptor) to include the interceptor in the providers array.

typescript
Copy code
// app.module.ts

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppComponent } from './app.component';
import { SimpleInterceptor } from './simple.interceptor';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, HttpClientModule],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: SimpleInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
Explanation:
This simple interceptor logs every HTTP request and response. It utilizes the tap operator from RxJS to inspect the outgoing request and the incoming response without affecting them.

You can expand upon this to include more complex logic like adding headers, modifying request parameters, handling responses, or even redirecting on specific HTTP status codes.





