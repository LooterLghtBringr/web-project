import { Component } from '@angular/core';
import { HttpService } from '../service/http.service';
import { Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormControl  } from '@angular/forms';
import { FormsModule }   from '@angular/forms';
import { validatePrice } from '../validation/cart-child-validation';
@Component({

  selector: 'app-cart-child',
  templateUrl: './cart-child.component.html',
  styleUrls: ['./cart-child.component.scss'],

})
export class CartChildComponent {

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
  @Input() title?: string;
  @Input() isOpen = true;
  @Output() closed = new EventEmitter<void>();
  mode ="";
  id = 0;
  name = "";
  brand = "";
  desc = "";
  price = 0;
  imageUrl = "";
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
  constructor(private http: HttpService,  private fb: FormBuilder) {
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

  AddToCart():void{
    const payload = {
      id: this.id,
      itemscount: 1,
      name: this.name,
      brand: this.brand,
      price: this.price,
      image: this.imageUrl
    };
  
   return this.http.AddDummyToCart(payload);

}
  ngOnInit(): void {
    this._getCart();
  }

  closeModal() {
    this.isOpen = false;
    this.closed.emit();
    this.mode = ""; 
  }

  openModal() {
    this.modalOpen = true;
    this.isOpen=true;
    this.mode = "Create"; 
  }

  modalClosed() {
    this.modalOpen = true;
  }


}
