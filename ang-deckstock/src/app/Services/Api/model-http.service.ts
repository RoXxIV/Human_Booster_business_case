import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { Model } from '../../Models/model';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ModelHttpService {

  constructor(private http: HttpClient) { }

  // Api-platform swagger
  url = 'http://localhost:8000/api/models';

  getAll(): Observable<Model[]> {
    return this.http.get<Model[]>(this.url)
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

  create(model: Model): Observable<Model>{
    return this.http.post<Model>(this.url, model);
  }

  update(id: any, data: any): Observable<any> {
    return this.http.put(`${this.url}/${id}`, data);
  }

  getById(id: any): Observable<Model> {
    return this.http.get<Model>(`${this.url}/${id}`)
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

  deleteOne(id: number): Observable<Model>{
    return this.http.delete<Model>(`${this.url}/${id}`);
  }
}
