import { Injectable } from '@angular/core';

@Injectable()
export class MathService {

  plus(x :number,y:number):number
  {
    return x + y;
  }

  mins(x :number,y:number):number
  {
    return x - y;
  }

  multy(x :number,y:number):number
  {
    return x * y;
  }

  devide(x :number,y:number):number
  {
    return x / y;
  }

}
