import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-category-read',
  templateUrl: './category-read.component.html',
  styleUrls: ['./category-read.component.scss']
})
export class CategoryReadComponent implements OnInit {

  displayedColumns: string[] = ['id', 'name', 'description', 'action'];

  constructor() { }

  ngOnInit(): void {
  }

}
