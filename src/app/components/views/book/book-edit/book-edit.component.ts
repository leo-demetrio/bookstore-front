import { Book } from './../book.model';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { BookService } from '../book.service';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-book-edit',
  templateUrl: './book-edit.component.html',
  styleUrls: ['./book-edit.component.scss']
})
export class BookEditComponent implements OnInit {

  title = new FormControl('', [Validators.minLength(3)]);
  name_author = new FormControl('', [Validators.minLength(3)]);
  text = new FormControl('', [Validators.minLength(10)]);

  id_cat: String = '';
  
  book: Book = {
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
  getMessage(){
    if(this.title.invalid){
      return "Invalid field must be 3 characters"
    }
    if(this.name_author.invalid){
      return "Invalid field must be 3 characters"
    }
    if(this.text.invalid){
      return "Invalid field must be 3 characters"
    }
    return false;
  }
 
  edit(): void {
    this.bookService.edit(this.book).subscribe(
      res => {
        this.router.navigate([`categories/${this.id_cat}/books`])
        this.bookService.message("Book Edited");
      },
      err => {
        this.bookService.message("Book can't be created");
      }
    )
  }
  findById(){
    this.bookService.findById(this.book.id!).subscribe(
      res => this.book = res
    )
  }
  cancel(){
    this.router.navigate([`categories/${this.id_cat}/books`]);
  }

}
