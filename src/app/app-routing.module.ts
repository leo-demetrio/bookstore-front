import { BookDeleteComponent } from './components/views/book/book-delete/book-delete.component';
import { BookEditComponent } from './components/views/book/book-edit/book-edit.component';
import { BookCreateComponent } from './components/views/book/book-create/book-create.component';
import { BookReadAllComponent } from './components/views/book/book-read-all/book-read-all.component';
import { CategoryEditComponent } from './components/views/categories/category-edit/category-edit.component';
import { CategoryCreateComponent } from './components/views/categories/category-create/category-create.component';
import { CategoryReadComponent } from './components/views/categories/category-read/category-read.component';
import { HomeComponent } from './components/views/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryDeleteComponent } from './components/views/categories/category-delete/category-delete.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'categories', component: CategoryReadComponent},
  {path: 'categories/create', component: CategoryCreateComponent},
  {path: 'categories/delete/:id', component: CategoryDeleteComponent},
  {path: 'categories/edit/:id', component: CategoryEditComponent},
  {path: 'categories/:id_cat/books', component: BookReadAllComponent},
  {path: 'categories/:id_cat/books/create', component: BookCreateComponent},
  {path: 'categories/:id_cat/books/:id/edit', component: BookEditComponent},
  {path: 'categories/:id_cat/books/:id/delete', component: BookDeleteComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
