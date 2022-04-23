import { Component, OnInit } from '@angular/core';
import { Category } from '../category.model';
import { CategoryService } from '../category.service';

@Component({
  selector: 'app-category-read',
  templateUrl: './category-read.component.html',
  styleUrls: ['./category-read.component.scss']
})
export class CategoryReadComponent implements OnInit {

  categories: Category[] = [];
  displayedColumns: string[] = ['id', 'name', 'description', 'action'];

  constructor(
    private categoryService: CategoryService
  ) { }

  ngOnInit(): void {
    this.findAll();
  }

  findAll() {
    this.categoryService.findAll().subscribe(
      
      res => {
        console.log(res)
        this.categories = res
      } 
    );
  }

}
