import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Skateshop } from '../../Models/skateshop';

@Injectable({
  providedIn: 'root'
})
export class SkateshopHttpService {

  constructor(private http: HttpClient) { }

  // Api-platform swagger
  url = 'http://localhost:8000/api/skateshops';

  getAll(): Observable<Skateshop[]> {
    return this.http.get<Skateshop[]>(this.url)
      .pipe(
        catchError((err) => {
          console.log('error caught in Skateshop service', err.status);
          console.error(err);
          /*
            Gérer l'erreur ici
            if (err.status === 500){...}
          */
          return throwError(err);
        })
      );
  }

  create(skateshop: Skateshop): Observable<Skateshop>{
    return this.http.post<Skateshop>(this.url, skateshop);
  }

  update(id: any, data: any): Observable<any> {
    return this.http.put(`${this.url}/${id}`, data);
  }

  getById(id: any): Observable<Skateshop> {
    return this.http.get<Skateshop>(`${this.url}/${id}`)
      .pipe(
          catchError((err) => {
            console.log('error caught in Skateshop service', err.status);
            console.error(err);
            /*
              Gérer l'erreur ici
              if (err.status === 500){...}
            */
            return throwError(err);
          })
        );
  }

  deleteOne(id: number): Observable<Skateshop>{
    return this.http.delete<Skateshop>(`${this.url}/${id}`);
  }
}
