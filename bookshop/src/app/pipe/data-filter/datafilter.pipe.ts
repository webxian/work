import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'datafilter'
})
export class DatafilterPipe implements PipeTransform {

  transform(value: Array<any>, key: any): Array<any> {
    let data:Array<any>=new Array;
    if(!key){
      return value;
    }
    for( let i = 0;i<value.length;i++){
      if(value[i].username.indexOf(key)!=-1){
        data.push(value[i]);
      }
      
    }
    return data;
    
  }

}
