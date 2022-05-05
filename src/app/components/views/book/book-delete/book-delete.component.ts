import { ActivatedRoute, Router } from '@angular/router';
import { BookService } from './../book.service';
import { Component, OnInit } from '@angular/core';
import { Book } from '../book.model';

@Component({
  selector: 'app-book-delete',
  templateUrl: './book-delete.component.html',
  styleUrls: ['./book-delete.component.scss']
})
export class BookDeleteComponent implements OnInit {

  id_cat: String = '';
  book: Book = {
    id: '',
    title: '',
    name_author: '',
    text: ''
  }

  constructor(
    private bookService: BookService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.id_cat = this.route.snapshot.paramMap.get('id_cat')!;
    this.book.id = this.route.snapshot.paramMap.get('id')!;
    this.findById();
  }
  findById(){
    this.bookService.findById(this.book.id!).subscribe(
      res => this.book = res
    )
  }
  delete(){
    this.bookService.delete(this.book.id!).subscribe(
      () => {
        this.router.navigate([`categories/${this.id_cat}/books`]);
        this.bookService.message('Book deleted');
      },
      err => {
        this.router.navigate([`categories/${this.id_cat}/books`]);
        this.bookService.message('Error deleted');
      }
    )
  }
  cancel(){
    this.router.navigate([`categories/${this.id_cat}/books`]);
  }

}
