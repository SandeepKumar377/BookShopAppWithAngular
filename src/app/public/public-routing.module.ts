import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PublicComponent } from './public.component';
import { AllBooksComponent } from './components/all-books/all-books.component';
import { BookDetailsComponent } from './components/book-details/book-details.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {
    path: 'public', component: PublicComponent,
    children: [
      { path: 'all-books', component: AllBooksComponent },
      { path: 'book-details/:id', component: BookDetailsComponent },
      { path: 'home', component: HomeComponent },
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule { }