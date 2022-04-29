import { Router } from '@angular/router';
import { CategoryService } from './../category.service';
import { Category } from './../category.model';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-category-create',
  templateUrl: './category-create.component.html',
  styleUrls: ['./category-create.component.scss']
})
export class CategoryCreateComponent implements OnInit {

  category: Category = {
    name: '',
    description: ''
  }
  constructor(
    private categoryService: CategoryService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }
  create(): void {
    this.categoryService.create(this.category).subscribe(
      res => {
        this.router.navigate(["categories"])
        this.categoryService.message("Category Created");
      },
      err => {
        console.log()
        for(let i = 0; i < err.error.errors.length; i++){
          this.categoryService.message(err.error.errors[i].message)
        }
      }
    )
  }
  

}
