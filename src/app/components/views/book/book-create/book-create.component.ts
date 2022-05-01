import { Book } from './../book.model';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { BookService } from '../book.service';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-book-create',
  templateUrl: './book-create.component.html',
  styleUrls: ['./book-create.component.scss']
})
export class BookCreateComponent implements OnInit {

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
 
  create(): void {
    this.bookService.create(this.book, this.id_cat).subscribe(
      res => {
        this.router.navigate([`categories/${this.id_cat}/books`])
        this.bookService.message("Book Created");
      },
      err => {
        this.bookService.message("Book can't be created");
      }
    )
  }
  cancel(){
    this.router.navigate([`categories/${this.id_cat}/books`]);
  }

}
