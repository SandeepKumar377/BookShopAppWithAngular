import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss']
})
export class BookDetailsComponent implements OnInit {

  public bookId:number=0;
  public author:string='';
  public name:string='';
  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {
    console.log(this.route);
    this.route.params.subscribe((param)=>{
      console.log("URL link values: ",param);
      this.bookId=param['id'];
      this.author=param['authorId'];
    });
    this.route.queryParams.subscribe((queryParam)=>{
      console.log("QueryParam is:",queryParam);
      this.name=queryParam['name'];
    });
  }

}
