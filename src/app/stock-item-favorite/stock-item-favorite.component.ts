import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, EventEmitter, OnChanges, OnDestroy, OnInit, Output, SimpleChanges } from '@angular/core';
import { Stock } from '../model/stock';

@Component({
  selector: 'stockmarket-stock-item-favorite',
  templateUrl: './stock-item-favorite.component.html',
  styleUrls: ['./stock-item-favorite.component.css']
})


export class StockItemFavoriteComponent implements OnInit , OnChanges , OnDestroy , DoCheck , AfterContentChecked,AfterContentInit,AfterViewChecked,AfterViewInit{
  favoriteStocks: Stock[];
  @Output() private togglefavorite : EventEmitter<Stock>;


  constructor() {
    this.favoriteStocks = []; 
    this.togglefavorite = new EventEmitter<Stock>();
  }
  ngAfterContentInit(): void {
   console.log('after content init');
  }
  ngAfterViewChecked(): void {
   console.log('after view checked');
   
  }
  ngAfterViewInit(): void {
   console.log('after view init');
   
  }
  ngAfterContentChecked(): void {
   console.log('after content checked');
   
  }


 
  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
      console.log('on changes');

  }

  ngOnDestroy(): void {
      console.log('on destroy');

  }

  ngDoCheck(): void {
      console.log('Do check')
  }

  doToggleFav(theStock: Stock): void {
    console.log("stock-favorite called");
    this.favoriteStocks.push(theStock);
    console.log("this.favoriteStocks", this.favoriteStocks.length);

  }


}
