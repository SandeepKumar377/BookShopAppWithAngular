import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CounterService {

  public counter: number=0;
  constructor() { }

  public increaseCounter():void{
    this.counter++;
  }
  public decreaseCounter():void{
    this.counter--;
  }
}


