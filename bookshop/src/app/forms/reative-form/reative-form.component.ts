import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, FormControl } from '@angular/forms';
@Component({
  selector: 'app-reative-form',
  templateUrl: './reative-form.component.html',
  styleUrls: ['./reative-form.component.css']
})
export class ReativeFormComponent {
  myForm:FormGroup;
  constructor(builder:FormBuilder) {
    this.myForm = builder.group({
      username:['someVal'],
      age: [],
      pwdGroup:builder.group({
        pwd:[],
        repwd:[]
      }),
      emails:builder.array([
        ['a@a.com2'],
        ['b@b.com2']
      ])
    });
  }

  doAddEmail(){
    let fa : FormArray = this.myForm.get('emails') as FormArray;
    fa.push(new FormControl("x@x.com"));
  }
  doSubmitForm(){
    console.log(this.myForm);
  }

  

}
