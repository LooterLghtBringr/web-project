import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';

export interface Cocktail {
  id: number;
  name: string;
  brand: string;
  desc: string;
  price: number;
  image: string;
}

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  httpOptions = {
    headers: new HttpHeaders({ 'content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' })
  };

  cocktails: Cocktail[] = [];

  name = "";
  brand = "";
  desc = "";
  price = 0;
  imageUrl = "";

  private productsURL = 'http://localhost:3000/products';

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.readCocktails();
  }

  create(cocktail:Cocktail) : Observable<Cocktail>{
    const headers = { 'content-type': 'application/json'}
    const body = JSON.stringify(cocktail);
    return this.http.post<Cocktail>(this.productsURL, body, {'headers': headers});
  }

  createCocktail(){
    let cocktail: Cocktail = {id: 16, name: this.name, brand: this.brand, desc: this.desc, price: this.price, image: this.imageUrl};
    console.log(cocktail);
    this.create(cocktail).subscribe();
    this.readCocktails();
  }

  read() : Observable<Cocktail>{
    return this.http.get<Cocktail>(this.productsURL);
  }

  readCocktails(){
    this.read().subscribe((response) => {
      this.cocktails = Object.assign([], response);
      console.log(this.cocktails);
    })
  }

  update(){
    //TODO
  }

  updateCocktail(){
    //TODO
  }

  delete(){
    //TODO
  }

  deleteCocktail(){
    //TODO
  }
}
