import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
// AuthService
export class AuthService {
  login(username: string, password: string): boolean {
    if (username === 'admin' && password === 'admin') {
      localStorage.setItem('loggedIn', 'true');
      return true;
    }
    return false;
  }

  logout(): void {
    localStorage.removeItem('loggedIn');
  }

  isLoggedIn(): boolean {
    return localStorage.getItem('loggedIn') === 'true';
  }
  private validUsername = 'admin';
  private validPassword = 'admin';

  constructor() {}

  checkCredentials(username: string, password: string): boolean {
    return username === this.validUsername && password === this.validPassword;
  }
}



