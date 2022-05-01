import { MatSnackBar } from '@angular/material/snack-bar';
import { environment } from './../../../../environments/environment';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Book } from './book.model';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  baseUrl: String = environment.baseUrl;
  constructor(
    private http: HttpClient,
    private _snack: MatSnackBar
  ) { }

  findAllByCategory(id_cat: String): Observable<Book[]> {
    const url = `${this.baseUrl}/books?category=${id_cat}`;
    return this.http.get<Book[]>(url);
  }
  create(book: Book, id_cat: String): Observable<Book> {
    const url = `${this.baseUrl}/books?category=${id_cat}`;
    return this.http.post<Book>(url, book);
  }
  findById(id: String): Observable<Book> {
    const url = `${this.baseUrl}/books/${id}`;
    return this.http.get<Book>(url);
  }
  delete(id: String): Observable<Book> {
    const url = `${this.baseUrl}/books/${id}`;
    return this.http.delete<Book>(url);
  }
  edit(id: String, book: Book): Observable<Book> {
    const url = `${this.baseUrl}/books/${id}`;
    return this.http.put<Book>(url, book);
  }
 
  message(str: String): void {
    this._snack.open(`${str}`, 'Ok', {
      horizontalPosition: 'end',
      verticalPosition: 'top',
      duration: 3000
    })
  }
}
