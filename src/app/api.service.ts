import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getConfigs() {
    let apiURL = 'assets/config.json';

    return this.http.get(apiURL); //Observalble
  }
}