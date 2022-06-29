import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { from, of as ObservableOf, Observable, throwError as ObservableError } from 'rxjs'
import { Stock } from '../model/stock';


@Injectable({
  providedIn: 'root'
})
export class StockService {
  private stocks: Stock[];



  constructor(private http: HttpClient) {

    this.stocks = [];

    // this.stocks = [
    //   new Stock(1, "TestStockCompany", "TSC", 85, 70),
    //   new Stock(2, "TestStockCompany 1", "TSC 1", 99, 100),
    //   new Stock(3, "TestStockCompany 3", "TSC 2", 89, 90),
    //   new Stock(4, "TestStockCompany 3", "TSC 3 ", 123, 456)
    // ];


  }
  // get _stocks():Observable<Stock[]>  {

  //   return ObservableOf(this.stocks);

  // }

  //http server calling//

  get _stocks(): Observable<Stock[]> {

    return this.http.get<Stock[]>("/api/stock", {
      headers: new HttpHeaders()

        .set("Authorization", "MyAuthorizationValue"),
      //  .set("x-Example-Header" , "Header Test Value")

      
    });


  }

  getStock(code :string): Observable<any>{

   return this.http.patch(`/api/stock/${code}`,code); //Plus is used for data types such as string or number And comma is used for object //

    
  }

  searchStocks(query: string): Observable<Stock[]> {

    return this.http.get<Stock[]>(`/api/stock?q=${query}`);


  }



  // createStock(theStock: Stock): Observable<any> {

  //   let foundStock = this.stocks.find(stc => stc.code == theStock.code);

  //   if (foundStock) {
  //     return ObservableError({

  //       msg : 'Stock code ' + theStock.code + 'Already  exist'
  //     });
  //   }

  //   this.stocks.push(theStock);

  //   return ObservableOf({
  //     msg : 'Stock code' + theStock.code + ' Created successfully'
  //   });

  // }


  createStock(theStock: Stock): Observable<any> {

    return this.http.post("/api/stock", theStock)


  }
  doToggleFav(id: number): void {

    let foundStock: any = this.stocks.find(st => st.id == id);

    console.log("foundStock", foundStock);

    foundStock.favorite = !foundStock.favorite



  }

  onRemove(theStock: Stock): void {

    // let foundStock : any = this.stocks.find ( st=> st.id == id);

    let foundIndex = this.stocks.indexOf(theStock);
    this.stocks.splice(foundIndex, 1);
    console.log('after removing:', this.stocks)

    // console.log("foundStock" , foundStock);


  }

  


}
