import { Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation } from '@angular/core';
import { Stock } from 'src/app/model/stock';
import { StockService } from 'src/app/services/stock.service';

@Component({
    selector: 'stockMarket-stock-item',
    templateUrl: './stock-item.component.html',
    styleUrls: ['./stock-item.component.css'],
    encapsulation: ViewEncapsulation.None
})
export class StockItemComponent implements OnInit {

    // @Input() stocks: Stock[];
    stocks: Stock[];
    @Output() private togglefavorite: EventEmitter<Stock>;
    stockClass: any;

    persons: any[];
    searchString :string

    constructor(private stockService: StockService) {
        this.stocks = []
        stockService._stocks.subscribe(stocks => {
         this.stocks = stocks
        });
        console.log(this.stocks, "Recived server stocks") ;
        this.togglefavorite = new EventEmitter<Stock>();
        this.searchString = ""

        this.persons = [
            {
                "name": "pratik",
                "age": 25,
                "country": "India"

            },

            {
                "name": "sid",
                "age": 26,
                "country": "UK"
            },

            {
                "name": "Utsav",
                "age": 22,
                "country": "Pak"


            }



        ];



        // this.name = 'Test Stock Company'

        // this.code = 'TSC'

        // this.price = 75;

        // this.previousprice = 80;

        // this.positivechange = this.price >= this.previousprice;




        // this.stockClass = {

        //     'text-success' : this.stock.ispositivechange(),
        //     'text - danger' : this.stock.ispositivechange(),
        //     'small-change' : true
        // }



    }

//    Event publisher 
   doToggleFav( id: number) {

   this.stockService.doToggleFav(id);



}

  onRemove(theStock:Stock){
      
    this.stockService.onRemove(theStock);



  }

    ngOnInit(): void {


    }

    search() {

        this.stockService.searchStocks(this.searchString).subscribe(stocks => {
            this.stocks = stocks
           });;

    }





}
