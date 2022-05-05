import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Book } from '../book.model';
import { BookService } from '../book.service';

@Component({
  selector: 'app-book-read',
  templateUrl: './book-read.component.html',
  styleUrls: ['./book-read.component.scss']
})
export class BookReadComponent implements OnInit {

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
  return(){
    this.router.navigate([`categories/${this.id_cat}/books`]);
  }

}
