import { Component, OnInit } from '@angular/core';
import { CounterService } from 'src/app/shared/services/counter.service';
import { BookModel } from '../../models/book.model';
import { BookService } from '../../services/book.service';

@Component({
  selector: 'app-all-books',
  templateUrl: './all-books.component.html',
  styleUrls: ['./all-books.component.scss']
})
export class AllBooksComponent implements OnInit {

  public books:BookModel[]=[];

  constructor(public bookService: BookService, public couterService: CounterService) { 
  }
  
  ngOnInit(): void {
    this.books= this.bookService.getBooks();
    console.log(this.books);
  }
  public increase(): void{
    this.couterService.increaseCounter();
  }
  public decrease(): void{
    this.couterService.decreaseCounter();
  }
}
