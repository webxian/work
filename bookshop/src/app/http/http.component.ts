import { Component, OnInit } from '@angular/core';
import { Http ,URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-http',
  templateUrl: './http.component.html',
  styleUrls: ['./http.component.css']
})
export class HttpComponent  {

  constructor(
    private http:Http
  ) { }

  msg:string;
  data:any = {
    result:[
      {}
    ]
  };

  loadData()
  {
    let url:string = "openapi/api";
    let body :any = {
      "key":"397bdd94b69f440b91d9e020da625c73",
      "info":this.msg,
      "userid":"123",
    };
  
    let response:Observable<any>  =   this.http.post(url,body);
    response.subscribe((data)=>{
      console.log(data);
      this.data = data.json().text;
    });
  }
  

  loadBus(){
    let url = `/189/bus/busline`;
    let params:URLSearchParams = new URLSearchParams();
    params.append("key","2a7a1a55bad6dede297928380a75b9e3");
    params.append("city",this.msg.split(";")[0]);
    params.append("bus",this.msg.split(";")[1]);
    this.http
      .post(url,params)
      .subscribe((data)=>{
        this.data = data.json();
      });
  }

}
