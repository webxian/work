import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-vote-item',
  templateUrl: './vote-item.component.html',
  styleUrls: ['./vote-item.component.css']
})
export class VoteItemComponent{

  constructor() { }
  @Input()
  inName:string;



}
