import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child-a',
  templateUrl: './child-a.component.html',
  styleUrls: ['./child-a.component.css']
})
export class ChildAComponent{

@Input()
childAname:string;
@Input()
childAage:string;

@Output()
backName:EventEmitter<string> = new EventEmitter<string>();

sendBack(){
  this.backName.emit(this.childAname.toUpperCase());
console.log("123");
}


}
