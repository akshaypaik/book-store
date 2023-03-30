import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { BooksHomeComponent } from './books-home/books-home.component';

const routes: Routes = [
  { path: '', component: BooksHomeComponent},
  { path: 'about-us', component: AboutUsComponent},
  { path: 'create-new-book', component: BooksHomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
