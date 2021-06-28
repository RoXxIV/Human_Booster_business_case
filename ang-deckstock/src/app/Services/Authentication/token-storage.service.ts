import { Injectable } from '@angular/core';

const TOKEN_KEY = 'auth-token';
const USER_KEY = 'auth-user';

@Injectable({
  providedIn: 'root'
})
export class TokenStorageService {

  constructor() { }

  saveToken(token: string): void{
    // if a token already exist, delete it
    window.sessionStorage.removeItem(TOKEN_KEY);
    // save the new token
    window.sessionStorage.setItem(TOKEN_KEY, token);
  }

  saveUser(user: any): void{
    window.sessionStorage.removeItem(USER_KEY);
    window.sessionStorage.setItem(USER_KEY, JSON.stringify(user));
  }

  // get User credential
  public getUser(): any {
    const user = window.sessionStorage.getItem(USER_KEY);
    if (user) {
      return JSON.parse(user);
    }
    return {};
  }

  signOut(): void {
    window.sessionStorage.clear();
  }

}
