import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor() {}

  login(credentials: { username: string; password: string }) {
    if (credentials.username === 'admin' && credentials.password === 'admin') {
      return true;
    } else {
      return false;
    }
  }
}
