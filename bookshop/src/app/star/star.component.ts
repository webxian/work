import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent {
  @Input()
  star:any;

  stars:boolean[] = new Array(5);

 

  ngOnInit()
  {
    console.log(this.star);
    this.stars.fill(true,0,this.star).fill(false,this.star,5);
    //[true,true,true,false,false]
    console.log(this.stars);
  }

}
