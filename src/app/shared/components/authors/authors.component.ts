import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { TestService } from '../../services/test.service';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.scss']
})
export class AuthorsComponent implements OnInit {
  
  // @Output() myData=new EventEmitter<string>();



  public data!:number;
  public setData(value: number): void{
    this.data=value;
  }

  constructor(private _testService:TestService) { }
  ngOnInit(): void {
  }
  public btnClick(): void{
    // this.myData.emit('This text is from child');
    this._testService.myData="This text from child using service."
  }
}
