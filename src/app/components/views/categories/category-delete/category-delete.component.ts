import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from './../category.service';
import { Category } from './../category.model';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-category-create',
  templateUrl: './category-delete.component.html',
  styleUrls: ['./category-delete.component.scss']
})
export class CategoryDeleteComponent implements OnInit {

  category: Category = {
    id: '',
    name: '',
    description: ''
  }

  constructor(
    private categoryService: CategoryService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.category.id = this.route.snapshot.paramMap.get("id")!;
    this.findById();
  }
  findById(){
    this.categoryService.findById(this.category.id!).subscribe(
      res => this.category = res
    )
  }
  delete(): void {
    this.categoryService.delete(this.category.id!).subscribe(
      res => {
        this.router.navigate(["categories"]);
        this.categoryService.message("Category deleted");
      },
      err => {
          this.categoryService.message(err.error.error);
      }
    )
  }
  cancel(){
    this.router.navigate(["categories"]);
  }
  

}
