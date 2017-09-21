import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
   public curDate :Date;
  constructor(
    private router:Router
  ) {
    this.curDate = new Date();

   }

  ngOnInit() {
  }
  toDir(){
    this.router.navigate(['/nav']);
  }

}
