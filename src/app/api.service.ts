import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  getConfigs() {
    let apiURL = 'assets/config.json';

    return this.http.get(apiURL); //Observalble
  }

  submitUserDetails(data: any) {
    return this.http.post('', data);
  }

  getUser() {
    return this.http.get('https://reqres.in/api/users/');
  }

  fetchData() {
    return this.http.get('/api/data').pipe(catchError(this.handleError));
  }

  private handleError(error: any) {
    console.error('Something went wrong', error);
    return throwError('Something bad happened; please try again later.');
  }
}
