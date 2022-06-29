
export class Stock {
id : number;
    name: string;

    code: string;

    price: number;

    previousprice: number;
  
    favorite: boolean;
    
    constructor(theId : number,theName: string, theCode: string, thePrice: number, thePreviousprice: number ) {
        this.id = theId;
        this.name = theName;
        this.price = thePrice;
        this.code = theCode;
        this.previousprice = thePreviousprice;
        this.favorite = false;

    }

    ispositivechange(): boolean {

        return this.price >= this.previousprice;


    }

}





