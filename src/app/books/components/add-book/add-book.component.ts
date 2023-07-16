import { Component, OnInit } from '@angular/core';
import { BookService } from '../../services/book.service';
import { BookModel } from '../../models/book.model';
import { PriceModel } from '../../models/price.model';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.scss']
})
export class AddBookComponent implements OnInit {
  
  constructor(private _bookService: BookService) { }

  // bookModel: BookModel= <BookModel>{};
  prices: PriceModel[] = [
    {value: 100, currency: '$ 100'},
    {value: 200, currency: '$ 200'},
    {value: 300, currency: '$ 300'},
  ];
  bookModel: BookModel = {
    id: 1, 
    title: 'Dot NET', 
    pages: 303,
    author: '',
    price: {
      value: 100,
      currency: 'USD'
    }
  };
 

  ngOnInit(): void {
    
  }

  saveBook(): void{
    console.log('data: ',this.bookModel);
    this._bookService.addBook(this.bookModel)
  }

}
