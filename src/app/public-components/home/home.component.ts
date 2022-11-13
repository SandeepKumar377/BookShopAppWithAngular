import { Component, OnInit } from '@angular/core';
import { CounterService } from 'src/app/shared/services/counter.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(public couterService: CounterService) { }

  ngOnInit(): void {
  }

  public increase(): void{
    this.couterService.increaseCounter();
  }
  public decrease(): void{
    this.couterService.decreaseCounter();

  }

}
