import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from './../category.service';
import { Category } from './../category.model';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-category-create',
  templateUrl: './category-edit.component.html',
  styleUrls: ['./category-edit.component.scss']
})
export class CategoryEditComponent implements OnInit {

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
  edit(): void {
    this.categoryService.edit(this.category.id!, this.category).subscribe(
      res => {
        this.router.navigate(["categories"]);
        this.categoryService.message("Category edited");
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
