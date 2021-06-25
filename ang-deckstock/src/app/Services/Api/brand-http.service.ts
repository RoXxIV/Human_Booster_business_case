import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Brand } from 'src/app/Models/brand';

@Injectable({
  providedIn: 'root'
})
export class BrandHttpService {

  constructor(private http: HttpClient) { }

  // Api-platform swagger
  url = 'http://localhost:8000/api/brands';

  getAll(): Observable<Brand[]> {
    return this.http.get<Brand[]>(this.url);
  }

  create(brand: Brand): Observable<Brand>{
    return this.http.post<Brand>(this.url, brand);
  }

  update(id: any, data: any): Observable<any> {
    return this.http.put(`${this.url}/${id}`, data);
  }

  getById(id: any): Observable<Brand> {
    return this.http.get<Brand>(`${this.url}/${id}`);
  }

  deleteOne(id: number): Observable<Brand>{
    return this.http.delete<Brand>(`${this.url}/${id}`);
  }
}
