import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(private http: HttpClient) {}
 
  
  getCartItems() {
    return this.http.get('http://localhost:3000/cart');
  }
  
  emptyCart() {
    return this.http.delete('http://localhost:3000/cart');
  }


  IncreaseItemCountById(itemId: any, itemsCount: any, itemPrice:any) {
    let currentCount = itemsCount+1;
    let price = currentCount *  itemPrice
    let payload = {
      itemscount: currentCount, 
      price: price
    };
    return this.http.patch("http://localhost:3000/cart/"+itemId+"", payload);
  }



  DecreaseItemCountById(itemId: any, itemsCount: any, itemPrice:any) {
    console.log(itemsCount);
    let currentCount = itemsCount-1; 
    let price = currentCount *  itemPrice; 
    let payload = {
      itemscount: currentCount, 
      price: price
    };
    return this.http.patch("http://localhost:3000/cart/"+itemId+"", payload);
  }


  DeleteItemId(itemId: any) {
   
    return this.http.delete("http://localhost:3000/cart/"+itemId+"");
  }

  AddDummyToCart(payload: any){

    let productCreatedFlag =false; 

    this.CheckifProductExists().subscribe((data:any)=> {
      data.forEach((arrElement: any)=> {
       if(arrElement.name == payload.name){
            productCreatedFlag = true; // found something
          } 
      });
      
      if(productCreatedFlag){
        this.IncreaseItemCountById(payload.id, payload.itemscount, payload.price).subscribe();
        window.location.reload();  
      } else {
        this.CreateNewProduct(payload).subscribe(); 
        window.location.reload(); 
      }

    })

  }

  CreateNewProduct(iteminformation:any){

    let payloadInfo = {
      name: iteminformation.name,
      itemscount: iteminformation.itemscount, 
      brand: iteminformation.brand, 
      price: iteminformation.price, 
      image: iteminformation.image
    } 


   return this.http.post("http://localhost:3000/cart", payloadInfo); 
  }


  CheckifProductExists(){
    return this.http.get('http://localhost:3000/cart'); 
  }




}