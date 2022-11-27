import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.scss']
})
export class AuthorsComponent implements OnInit {

  @Input() 
  set data(value: number){    
    this._data= ++value;
  }
  get data(){
    return this._data;
  }
  private _data!:number;
  @Input()
  showAuthors:boolean | undefined;
  constructor() { }

  ngOnInit(): void {
  }

}
