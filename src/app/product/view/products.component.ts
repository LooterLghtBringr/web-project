import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { delay, firstValueFrom, Observable, throwError } from 'rxjs';
import { FormBuilder, FormControl } from '@angular/forms';
import { validateId, validatePrice } from '../validation/products.validator';
import { throwToolbarMixedModesError } from '@angular/material/toolbar';

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
  
  selectedCocktail = {  id: 0,
    name: "",
    brand: "",
    desc: "",
    price: 0,
    image: ""};

  id = 0;
  name = "";
  brand = "";
  desc = "";
  price = 0;
  imageUrl = "";

  searchterm = "";

  mode = "";

  private productsURL = 'http://localhost:3000/products';

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
        [
            validateId
        ]
    ]
  });

  constructor(private http: HttpClient, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.readCocktails();
  }

  create(cocktail:Cocktail) : Observable<Cocktail>{
    const headers = { 'content-Type': 'application/json'};
    const body = JSON.stringify(cocktail);
    return this.http.post<Cocktail>(this.productsURL, body, {'headers' : headers});
  }

  createCocktail(){
    let cocktail: Cocktail = {id: this.cocktails.length+1, name: this.name, brand: this.brand, desc: this.desc, price: this.price, image: this.imageUrl};
    this.create(cocktail).subscribe(() =>
    window.location.reload());
    this.readCocktails();
  }

  read() : Observable<Cocktail>{
    return this.http.get<Cocktail>(this.productsURL);
  }

  readSingle(id: number) : Observable<Cocktail>{
    return this.http.get<Cocktail>(this.productsURL + "/" + id +"");
  }

  readSingleCocktail(){
    this.readSingle(this.id).subscribe((response) => {
      if(this.name === ""){this.name = response.name}
      if(this.brand === ""){this.brand = response.brand}
      if(this.desc === ""){this.desc = response.desc}
      if(this.price === 0){this.price = response.price}
      if(this.imageUrl === ""){this.imageUrl = response.image}
    })
  }

  readCocktails(){
    this.read().subscribe((response) => {
      this.cocktails = Object.assign([], response);
    })
  }

  update(cocktail:Cocktail){
    const headers = { 'content-Type': 'application/json'};
    const body = JSON.stringify(cocktail);
    return this.http.patch(this.productsURL + "/" + cocktail.id+"", body, {'headers' : headers});
  }

  updateCocktail(){
    this.readSingleCocktail();

    let cocktail: Cocktail = {id: this.id, name: this.name, brand: this.brand, 
      desc: this.desc, price: this.price, image: this.imageUrl};
    this.update(cocktail).subscribe(() =>
      window.location.reload());
    this.readCocktails();
  }

  delete(itemId: any){
    return this.http.delete("http://localhost:3000/products/"+itemId+"");
  }

  deleteCocktail(){
    let cocktail: Cocktail = {id: this.id, name: this.name, brand: this.brand, desc: this.desc, price: this.price, image: this.imageUrl};
    this.delete(cocktail.id).subscribe(() =>
    window.location.reload());
    this.readCocktails();
  }

  search(searchterm: any){
    if(searchterm === "" || searchterm === undefined){
      this.readCocktails();
    }
    else{
      this.read().subscribe((data: any) => {
        this.cocktails = data.filter((x: any)=> x.name === searchterm)
       });
    }
  }

  select(cocktail: Cocktail){
    this.selectedCocktail = cocktail;
  }
}
