import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'eCommerce-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  id: number;

  price: number;
  
   previousprice : number;

  title: string;

  name: string;

  code: string;

  constructor() {

    this.id = 10

    this.price = 80

    this.previousprice = 90

    this.title = 'Vapour'

    this.name = 'Nike Airmax'

    this.code = 'NKMAX22'



  }

  ngOnInit(): void {





  }

}
