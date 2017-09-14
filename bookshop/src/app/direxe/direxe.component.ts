import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-direxe',
  templateUrl: './direxe.component.html',
  styleUrls: ['./direxe.component.css']
})
export class DirexeComponent {
  username:string;
  password:number;
  age:number;
  users:Array<any>=[];
  doAdd(){
    this.users.push({"username":this.username,"password":this.password,"age":this.age});
  }
  doDelete(i){
    this.users.splice(i,1);
  }
  constructor() { }

  ngOnInit() {
  }

}
