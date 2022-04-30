import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { BookService } from '../../book/book.service';
import { Book } from '../book.model';

@Component({
  selector: 'app-book-read-all',
  templateUrl: './book-read-all.component.html',
  styleUrls: ['./book-read-all.component.scss']
})
export class BookReadAllComponent implements OnInit {


  id_cat: String = '';
  books: Book[] = [];
  displayedColumns: string[] = ['id', 'title', 'books', 'action'];

  constructor(
    private bookService: BookService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.id_cat = this.route.snapshot.paramMap.get('id_cat')!;
    this.findAll();
  }
  findAll(){
    this.bookService.findAllByCategory(this.id_cat!).subscribe(
      res =>  {
        res ? this.bookService.message("Not books") : this.books = res;
        
      }
    )
  }
  navigateCreate(){
    this.router.navigate(["books/create"]);
  }

}
