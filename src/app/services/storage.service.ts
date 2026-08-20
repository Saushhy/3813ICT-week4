import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  private USER_KEY = 'currentUser';

  getUser() {
    const data = localStorage.getItem(this.USER_KEY);
    if (data) {
      return JSON.parse(data);
    }
    return null;
  }

  setUser(user: any) {
    localStorage.setItem(this.USER_KEY, JSON.stringify(user));
  }

  removeUser() {
    localStorage.removeItem(this.USER_KEY);
  }

  isLoggedIn() {
    return localStorage.getItem(this.USER_KEY) !== null;
  }
}
