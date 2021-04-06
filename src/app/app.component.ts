import { CurrencyPipe } from './currency.pipe';
import { Component } from '@angular/core';
//import * as Rates from './data.json';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
   providers: [CurrencyPipe]
})

export class AppComponent {
  title = 'angular-currency-converter';

  buttons: any=[
    
      { "id":"USD",  "value": 1.126735},
      { "id":"GBP", "value":0.876893},
      { "id":"INR", "value":79.677056}
  ];
  fromCurrency: object;
  toCurrency: object;
  inputCurrency:number;
  result : string ='';

constructor(private currencyPipe: CurrencyPipe){

}

convert(c2,c1){
  console.log(c1,c2,this.inputCurrency);
  this.result = this.currencyPipe.transform(c1,c2,this.inputCurrency);
  }

  getKeys() {
    return Object.keys(this.toCurrency);
  }


}
