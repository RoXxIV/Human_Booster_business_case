import { Injectable } from '@angular/core';
import { User } from '../../Models/user';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, private jwtToken: JwtHelperService) { }

  // acces Backend
  url = 'http://localhost:8000/';

  // Register new user
  urlRegister = 'http://localhost:8000/sign_in';

  create(user: User): Observable<User>{
    return this.http.post<User>(this.urlRegister, user);
  }

  login(credentials: User): Observable<any> {
    return this.http.post(this.url + 'login', {
      username: credentials.username,
      password: credentials.password
    });
  }

  saveUser(token: string): Observable<Object>{
    const httpOptions = {
    headers: new HttpHeaders({ Authorization: `Bearer ${token}`})
  };
    return this.http.get(`${this.url}api/user`, httpOptions);
  }

  // Check whether the token is expired and return
   isAuthenticated(): boolean {
    const token = window.sessionStorage.getItem('auth-token');
    return !this.jwtToken.isTokenExpired(token);
  }
}
