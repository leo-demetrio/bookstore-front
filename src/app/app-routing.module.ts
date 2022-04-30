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
  {path: 'categories/edit/:id', component: CategoryEditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
