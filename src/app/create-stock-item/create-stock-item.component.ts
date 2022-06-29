import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FormStock } from '../model/form-stock.model';
import { Stock } from '../model/stock';
import { StockService } from '../services/stock.service';

@Component({
  selector: 'stockmarket-create-stock-item',
  templateUrl: './create-stock-item.component.html',
  styleUrls: ['./create-stock-item.component.css']
})
export class CreateStockItemComponent implements OnInit {
  stock: Stock;
  confirm: boolean;
  stockCodes: string[];
  formStock: FormStock
  newStocks: FormStock[];
  stockForm: FormGroup;
  submitArr: Stock[];
  message: string;
  constructor(private stockService: StockService , private router : Router) {

    this.stock = new Stock(0, "", "", 0, 0);

    this.confirm = false;

    this.stockCodes = ["NASDQ", "NYSE", "OTHER"];

    this.newStocks = [];

    this.submitArr = [];

    this.formStock = new FormStock();

    this.stockForm = new FormGroup({

      name: new FormControl(null, [Validators.required]),

      code: new FormControl(null, [Validators.required, Validators.minLength(2)]),

      price: new FormControl('ng', [Validators.required, Validators.min(1), Validators.max(5)]),

    });

    this.message = ""


  }


  ngOnInit(): void {


  }


  createStock(theStock: Stock): void {

    // console.log("Click event occured");
    // console.log(this.stock);

    // this.formStock = new FormStock(this.stock.id, this.stock.name, this.stock.code,
    //   this.stock.price);


    // this.newStocks.push(this.formStock);
    // console.log(this.newStocks);

    // if (theStock.valid) {

    //   this.newStocks.push(this.formStock);
    // }

    // else {

    //   console.error("form is not valid");

    // }



    // this.router.navigate(["stockItem"]);


  }

  onsubmit(): void {



    // this.confirm = true;
    // console.log(this.stockForm.value);
    this.stock = Object.assign({}, this.stockForm.value);


    if (this.stockForm.valid) {

        this.stockService.createStock(this.stock).subscribe(result => {
           this.message = result.msg;

        } , 
        (err) => {

          this.message=err.msg;

        } ); 

      // if (created) {

      //   this.message = "Stock Created "


      // }
      // else {

      //   this.message = " Could not create a stock"

      // }

    }
    else {

      this.message = " form invalid";
    }
    this.onReset();


    // this.submitArr.push(this.stock);

    // console.log("this.submitArr" , this.submitArr);



  }

  onReset(): void {

    this.confirm = false;

    this.stockForm.reset();


  }



}