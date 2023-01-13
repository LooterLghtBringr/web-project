import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  carts:any;
  cartDetails:any; 
  totals=0; 
   show = true; 
    payload = {
    id: 6,
    itemscount:3, 
    name: "hihi", 
    brand: "hihi", 
    price: 3, 
    image: "https://res.cloudinary.com/digibar/image/upload/v1654440963/white-wine_xof6h0.jpg"
  }; 
  constructor(private http: HttpService) {

  }


  _getCart(): void {
    this.http.getCartItems().subscribe((data: any) => {
      this.carts = data;
      this.getTotals(); 
    //  console.log(this.carts);
    });
  }
 
  ngOnInit(): void {
    this._getCart();
  }

  getTotals():void{
    this.carts.forEach((arr:any)=> {
      this.totals += arr.price; 
    });
    console.log(this.totals); 
  }

  AddToCart(itemId: any, itemsCount: any):void{
   this.http.IncreaseItemCountById(itemId, itemsCount).subscribe(() => 
   window.location.reload() )
  }


  


  DecreaseFromCart(itemId: any, itemsCount:any):void{
    if(itemsCount == 1){
      this.DeleteFromCart(itemId); 
    } else {
      this.http.DecreaseItemCountById(itemId, itemsCount).subscribe(() => 
      window.location.reload())
    }
  
  }

  DeleteFromCart(itemId: any):void{
    this.http.DeleteItemId(itemId).subscribe(() => 
    window.location.reload())
  } 

  EmptyAll():void{
  
    this.carts.forEach((element: any) => {
      this.http.DeleteItemId(element.id).subscribe(() => 
      console.log("ALLES Gelöscht"))
    });
    window.location.reload(); 
  }


  AddToCartDummy():void{
  
    return this.http.AddDummyToCart(this.payload);  

}


}