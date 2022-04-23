import { environment } from './../../../../environments/environment';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from './category.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  baseUrl: String = environment.baseUrl;
  constructor(
    private http: HttpClient,
  ) { }

  findAll(): Observable<Category[]> {
    const url = `${this.baseUrl}/categories`;
    return this.http.get<Category[]>(url);
  }
}
