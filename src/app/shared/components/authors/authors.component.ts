import { AfterContentChecked, AfterContentInit, Component, ContentChild, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TestService } from '../../services/test.service';
import { AuthorModel } from '../../models/authors.model'; 
import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';
import { AuthorsAddressComponent } from '../authors-address/authors-address.component';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.scss']
})
export class AuthorsComponent implements OnInit, AfterContentInit, AfterContentChecked {
  
  // @Output() myData=new EventEmitter<string>();

  @ContentChild(AuthorsAddressComponent) authAdress!: AuthorsAddressComponent;
  @Input() author!: AuthorModel;

  // public data!:number;
  public setData(value: number): void{
    // this.data=value;
  }

  constructor(private _testService:TestService) { }
  ngAfterContentChecked(): void {
    console.log("After content Checked"+ this.authAdress?.address)
  }
  ngAfterContentInit(): void {
    console.log("After content init"+ this.authAdress?.address)
  }

  ngOnInit(): void {
  }
exportToExcel():void{}



  
  public btnClick(): void{
    // this.myData.emit('This text is from child');
    this._testService.myData="This text from child using service."
  }
}
