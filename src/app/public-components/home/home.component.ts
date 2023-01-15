import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { AuthorsComponent } from 'src/app/shared/components/authors/authors.component';
import { CounterService } from 'src/app/shared/services/counter.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  @ViewChild('authors') private childAuthor!: AuthorsComponent;
  @ViewChild('title') private title!: ElementRef;
  @ViewChild('decButton') private decButton!: MatButton;
  constructor(public couterService: CounterService) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void{
    setTimeout(()=>{
      this.childAuthor.setData(11);
      this.decButton.color= 'primary';
      this.decButton.disabled=true;
      console.log(this.title);
      this.title.nativeElement.innerHTML= 'This is updated text!';
    },0);
  }

  public increase(): void{
    this.couterService.increaseCounter();
  }
  public decrease(): void{
    this.couterService.decreaseCounter();

  }

}
