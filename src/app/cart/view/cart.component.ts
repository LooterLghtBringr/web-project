import { Component, OnInit } from '@angular/core';
import {HttpService} from '../service/http.service';
import { FormBuilder, FormControl  } from '@angular/forms';
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
  searchterm: any;
   prices = 0;
   modalOpen = false;
  isError = false; 
   form = this.fb.nonNullable.group({
    suche: [
        '',
        [
        
        ]
    ],
    error: [
      '',
      [
      
      ]
  ],
  });

  constructor(private http: HttpService, private fb: FormBuilder) {
    // return this._getCart();
  }

  openModal() {
    this.modalOpen = true;
  }

  modalClosed() {
    this.modalOpen = false;
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



  AddToCart(itemId: any, itemsCount: any, itemPrice:any, itemprice:any):void{
   this.http.IncreaseItemCountById(itemId, itemsCount, itemPrice, itemprice).subscribe(() =>
   window.location.reload() )
  }





  DecreaseFromCart(itemId: any, itemsCount:any, itemPrice:any, itemprice:any):void{
    if(itemsCount == 1){
      this.DeleteFromCart(itemId);
    } else {
      this.http.DecreaseItemCountById(itemId, itemsCount, itemPrice, itemprice).subscribe(() =>
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




search(searchterm: any): void{
  if(searchterm === "" || searchterm === undefined){
   this._getCart();
   this.isError=false; 
  } else {
    this.http.getCartItems().subscribe((data: any) => {
     this.carts = data.filter((x: any)=> x.name === searchterm)
     if(this.carts.length == 0){
      this.isError = true; 
    }
    });
    

  }
 

}


}
