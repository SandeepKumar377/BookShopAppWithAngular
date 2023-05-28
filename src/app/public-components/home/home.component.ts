import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AuthorModel } from 'src/app/shared/models/authors.model';
import { CounterService } from 'src/app/shared/services/counter.service';
import { TestService } from 'src/app/shared/services/test.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public obj: AuthorModel={id:10,name:'Sandeep'}
  public address:string="India";

  constructor(public _testService: TestService) { }

  ngOnInit(): void {
  }
  public childData($event:any):void{
    console.log($event);
  }
}
