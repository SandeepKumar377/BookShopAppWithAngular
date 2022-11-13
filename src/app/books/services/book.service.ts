import { Injectable } from '@angular/core';
import { BookModel } from '../models/book.model';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor() { }

  public getBooks(): BookModel[]{
    return [
      { "id":1, "title":"Angular-14", "totalPages":230, "author":"Ang", "price":{"currency":"INR", "value":399}},
      { "id":2, "title":"ReactJS", "totalPages":230, "author":"React", "price":{"currency":"INR", "value":499}},
      { "id":3, "title":"NextJS", "totalPages":230, "author":"Next", "price":{"currency":"INR", "value":599}},
      { "id":4, "title":"ExpressJS", "totalPages":230, "author":"Express", "price":{"currency":"INR", "value":699}},
      { "id":5, "title":"NodeJS", "totalPages":230, "author":"Node", "price":{"currency":"INR", "value":799}},
    ]
  }
  
}
