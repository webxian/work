import { Injectable } from '@angular/core';
import { MathService } from './math.service';

@Injectable()
export class MathplusService implements MathService{
  plus(x: number, y: number): number {
   return 1;
  }
  mins(x: number, y: number): number {
   return 1;
  }
  multy(x: number, y: number): number {
   return 1;
  }
  devide(x: number, y: number): number {
   return 1;
  }


  pow(n:number,x:number):number{
    return Math.pow(n,x);
  }



}
