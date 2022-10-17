import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  name:string='';
  email:string='';

  constructor(private route:ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe((queryParam=>{
      this.name=queryParam['name']
      this.email=queryParam['email']
      console.log("Query Param:",queryParam);
    }))
  }

  goToSignUp():void{
    this.router.navigate(['auth/signup'])
  }
  
  goToBookDetails(id:number, author:string):void{
    this.router.navigate(['/public/book-details',id,'author',author], 
      // {
      //   queryParams:{name:'dotNet', email:'samle@gmail.com'},
      // }
    );
  }

}
