import { Component } from '@angular/core';
import { HttpService } from '../http.service';
import { Input, Output, EventEmitter } from '@angular/core';

@Component({
 
  selector: 'app-cart-child',
  templateUrl: './cart-child.component.html',
  styleUrls: ['./cart-child.component.scss'], 

})
export class CartChildComponent {
  @Input() title?: string;
  @Input() isOpen = true;
  @Output() closed = new EventEmitter<void>();
  searchterm:any; 
  carts:any;
  payload = {
    id: 6,
    itemscount:3, 
    name: "hihi", 
    brand: "hihi", 
    price: 3, 
    image: "https://res.cloudinary.com/digibar/image/upload/v1654440963/white-wine_xof6h0.jpg"
  }; 

  modalOpen = false;
  constructor(private http: HttpService) {
  }
  _getCart(): void {
    this.http.getCartItems().subscribe((data: any) => {
      this.carts = data;
     
    //  console.log(this.carts);
    });
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
  ngOnInit(): void {
    this._getCart();
  }

  closeModal() {
    this.isOpen = false;
    this.closed.emit();
  }

  openModal() {
    this.modalOpen = true;
    this.isOpen=true; 
  }

  modalClosed() {
    this.modalOpen = true;
  }


}
