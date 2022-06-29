import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StockService } from 'src/app/services/stock.service';

@Component({
  selector: 'app-stock-details',
  templateUrl: './stock-details.component.html',
  styleUrls: ['./stock-details.component.css']
})
export class StockDetailsComponent implements OnInit {

  name : string;

  price : number ;

  code : string;
  message: string ; 

  constructor( private stockService : StockService, private route : ActivatedRoute) { 

   this.name = "TSC";

   this.price = 85;

   this.code = "NYSE";
  this.message = "";


// console.log("Params recived" , route.paramMap.get(id)) 

    //  console.log(route.snapshot.params['code']);


     stockService.getStock(route.snapshot.params['code']).subscribe(res => {
       this.message = res.msg;
     },
    (err) => {
      this.message = err.msg;

    })


  }



  ngOnInit(): void {
  }

}
