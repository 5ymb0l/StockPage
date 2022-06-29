import { Component } from '@angular/core';
import { Stock } from './model/stock';



@Component({
  selector: 'stockMarket-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

 stockArray: Stock[];
 constructor() {
 
  this.stockArray = [ 
    new Stock(1,"TestStockCompany", "TSC", 85, 70),
    new Stock(2,"TestStockCompany 1" , "TSC 1" , 99 ,100),
    new Stock(3,"TestStockCompany 3" , "TSC 2" , 89 , 90),
    new Stock(4,"TestStockCompany 3" , "TSC 3 " , 123 , 456)
  ];
  


 }

 // Event subscribers 

 doToggleFav(stock: Stock){

  console.log("stock is ", stock);

 } 
}