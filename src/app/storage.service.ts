import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  constructor() {}

  // Local Storage
  setLocal(key: string, value: any): void {
    localStorage.setItem(key, JSON.stringify(value));
  }

  getLocal(key: string): any {
    const data = localStorage.getItem(key);
    if (data) {
      return JSON.parse(data);
    }
    return null;
  }

  removeLocal(key: string): void {
    localStorage.removeItem(key);
  }

  // Session Storage
  setSession(key: string, value: any): void {
    sessionStorage.setItem(key, JSON.stringify(value));
  }

  getSession(key: string): any {
    const data = sessionStorage.getItem(key);
    if (data) {
      return JSON.parse(data);
    }
    return null;
  }

  removeSession(key: string): void {
    sessionStorage.removeItem(key);
  }
}
