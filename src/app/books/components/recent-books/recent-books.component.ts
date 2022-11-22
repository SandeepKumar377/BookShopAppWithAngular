import { Component, OnInit } from '@angular/core';
import { BookModel } from '../../models/book.model';
import { BookService } from '../../services/book.service';

@Component({
  selector: 'app-recent-books',
  templateUrl: './recent-books.component.html',
  styleUrls: ['./recent-books.component.scss']
})
export class RecentBooksComponent implements OnInit {

  public recentBook: BookModel[]=[];
  constructor(private _bookService: BookService) { }

  ngOnInit(): void {
    this.getRecentBooks();
  }

  private getRecentBooks():void{
    this.recentBook= this._bookService.recentBooks();
  }

}
