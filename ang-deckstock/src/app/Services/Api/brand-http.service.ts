import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Brand } from 'src/app/Models/brand';

@Injectable({
  providedIn: 'root'
})
export class BrandHttpService {

  constructor(private http: HttpClient) { }

  // Api-platform swagger
  url = 'http://localhost:8000/api/brands';

  getAll(): Observable<Brand[]> {
    return this.http.get<Brand[]>(this.url)
      .pipe(
        catchError((err) => {
          console.log('error caught in brand service', err.status);
          console.error(err);
          /*
            Gérer l'erreur ici
            if (err.status === 500){...}
          */
          return throwError(err);
        })
      );
  }

  create(brand: Brand): Observable<Brand>{
    return this.http.post<Brand>(this.url, brand);
  }

  update(id: any, data: any): Observable<any> {
    return this.http.put(`${this.url}/${id}`, data);
  }

  getById(id: any): Observable<Brand> {
    return this.http.get<Brand>(`${this.url}/${id}`)
      .pipe(
          catchError((err) => {
            console.log('error caught in brand service', err.status);
            console.error(err);
            /*
              Gérer l'erreur ici
              if (err.status === 500){...}
            */
            return throwError(err);
          })
        );
  }

  deleteOne(id: number): Observable<Brand>{
    return this.http.delete<Brand>(`${this.url}/${id}`);
  }
}
