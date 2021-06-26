import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Advert } from 'src/app/Models/advert';

@Injectable({
  providedIn: 'root'
})
export class AdvertHttpService {

  constructor(private http: HttpClient) { }

  // Api-platform swagger
  url = 'http://localhost:8000/api/adverts';

  getAll(): Observable<Advert[]> {
    return this.http.get<Advert[]>(this.url)
      .pipe(
        catchError((err) => {
          console.log('error caught in Advert service', err.status);
          console.error(err);
          /*
            Gérer l'erreur ici
            if (err.status === 500){...}
          */
          return throwError(err);
        })
      );
  }

  create(advert: Advert): Observable<Advert>{
    return this.http.post<Advert>(this.url, advert);
  }

  update(id: any, data: any): Observable<any> {
    return this.http.put(`${this.url}/${id}`, data);
  }

  getById(id: any): Observable<Advert> {
    return this.http.get<Advert>(`${this.url}/${id}`)
      .pipe(
          catchError((err) => {
            console.log('error caught in Advert service', err.status);
            console.error(err);
            /*
              Gérer l'erreur ici
              if (err.status === 500){...}
            */
            return throwError(err);
          })
        );
  }

  deleteOne(id: number): Observable<Advert>{
    return this.http.delete<Advert>(`${this.url}/${id}`);
  }
}
