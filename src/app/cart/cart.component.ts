import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { FormBuilder, FormControl, ReactiveFormsModule  } from '@angular/forms';


@Component({

  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
 
})
export class CartComponent implements OnInit {
  form = this.fb.nonNullable.group({
    price: [
        '',
        [
            validatePrice
        ]
    ],
    desc: [
      '',
        []
    ],
      brand: [
        '',
        []
    ],
    imageUrl: [
      '',
        []
    ],
    name: [
      '',
        []
    ],
    id: [
      '',
        []
    ]
  });
  carts:any;
  cartDetails:any; 
  totals=0; 
   show = true; 
  searchterm: any; 
   prices = 0; 
   modalOpen = false;


  constructor(private http: HttpService) {
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



  AddToCart(itemId: any, itemsCount: any, itemPrice:any):void{
   this.http.IncreaseItemCountById(itemId, itemsCount, itemPrice).subscribe(() => 
   window.location.reload() )
  }


  


  DecreaseFromCart(itemId: any, itemsCount:any, itemPrice:any):void{
    if(itemsCount == 1){
      this.DeleteFromCart(itemId); 
    } else {
      this.http.DecreaseItemCountById(itemId, itemsCount, itemPrice).subscribe(() => 
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
  } else {
    this.http.getCartItems().subscribe((data: any) => {
     this.carts = data.filter((x: any)=> x.name === searchterm)
    });
  }
 
}




}