import { Component, OnInit } from '@angular/core';
import { MathService } from '../math.service';

@Component({
  selector: 'app-some',
  templateUrl: './some.component.html',
  styleUrls: ['./some.component.css']
})
export class SomeComponent {
  constructor(public s:MathService){}
    m:number;
    n:number;
    result:number;

    doPlus(){
      this.result = this.s.plus(this.m*1,this.n*1);
    
  }
    doMins(){

    }
}
