import { MatSnackBar } from '@angular/material/snack-bar';
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
    private _snack: MatSnackBar
  ) { }

  findAll(): Observable<Category[]> {
    const url = `${this.baseUrl}/categories`;
    return this.http.get<Category[]>(url);
  }
  create(category: Category): Observable<Category> {
    const url = `${this.baseUrl}/categories`;
    return this.http.post<Category>(url, category);
  }
  findById(id: String): Observable<Category> {
    const url = `${this.baseUrl}/categories/${id}`;
    return this.http.get<Category>(url);
  }
  delete(id: String): Observable<Category> {
    const url = `${this.baseUrl}/categories/${id}`;
    return this.http.delete<Category>(url);
  }
  edit(id: String, category: Category): Observable<Category> {
    const url = `${this.baseUrl}/categories/${id}`;
    return this.http.put<Category>(url, category);
  }
 
  message(str: String): void {
    this._snack.open(`${str}`, 'Ok', {
      horizontalPosition: 'end',
      verticalPosition: 'top',
      duration: 3000
    })
  }
}
