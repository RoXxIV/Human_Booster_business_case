import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { User } from 'src/app/Models/user';

@Injectable({
  providedIn: 'root'
})
export class UserHttpService {

  constructor(private http: HttpClient) { }

  // Api-platform swagger
  url = 'http://localhost:8000/api/users';

  getAll(): Observable<User[]> {
    return this.http.get<User[]>(this.url)
      .pipe(
        catchError((err) => {
          console.log('error caught in User service', err.status);
          console.error(err);
          /*
            Gérer l'erreur ici
            if (err.status === 500){...}
          */
          return throwError(err);
        })
      );
  }

  create(user: User): Observable<User>{
    return this.http.post<User>(this.url, user);
  }

  update(id: any, data: any): Observable<any> {
    return this.http.put(`${this.url}/${id}`, data);
  }

  getById(id: any): Observable<User> {
    return this.http.get<User>(`${this.url}/${id}`)
      .pipe(
          catchError((err) => {
            console.log('error caught in User service', err.status);
            console.error(err);
            /*
              Gérer l'erreur ici
              if (err.status === 500){...}
            */
            return throwError(err);
          })
        );
  }

  deleteOne(id: number): Observable<User>{
    return this.http.delete<User>(`${this.url}/${id}`);
  }
}
