import { Pipe, PipeTransform } from '@angular/core';
import { Rates } from './rates';
@Pipe({
  name: 'currency'
})
export class CurrencyPipe implements PipeTransform {

  rates: object;
  rateArray: Array<string>;
  indexFrom: number;
  indexTo:number;
  selectedFrom: number;
  selectedTo: number;
  result : number;

  constructor() {
    this.rateArray = [];
    this.indexFrom = 0;
    this.selectedFrom = 0;
    this.selectedTo = 0;
  }

  transform(c1: any, c2: any, amount:number) {

    var t1:number=Number(c1);
    console.log(t1);
    var t2:number=Number(c2);
    console.log(t2);
    var data:number =t1/t2;
    console.log(data);
     this.result=data*amount;


      return Math.round(this.result).toFixed(2);
  }
}
