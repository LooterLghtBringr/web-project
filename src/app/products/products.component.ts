import { Component, OnInit } from '@angular/core';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  tiles: Tile[] = [
    {text: 'One', cols: 1, rows: 1, color: 'lightblue'},
    {text: 'Two', cols: 1, rows: 1, color: 'lightgreen'},
    {text: 'Three', cols: 1, rows: 1, color: 'lightpink'},
    {text: 'Four', cols: 1, rows: 1, color: '#DDBDF1'},
  ];

  productToCreate = '';
  productToDelete = '';
  productToUpdate = '';
  newProductName = '';
  productToRead = '';
  selectedTile: Tile | undefined;

  constructor() { }

  ngOnInit(): void {
  }

  create(){
    let i = Math.floor(Math.random() * 3);
    var colors:string[];
    colors = ['lightblue','lightgreen','lightpink','#DDBDF1'];
    this.tiles.push({text: this.productToCreate, cols: 1, rows: 1, color: colors[i]});
  }

  delete(){
    this.tiles.splice(this.tiles.findIndex(x => x.text === this.productToDelete), 1);
  }

  update(){
    let i = this.tiles.findIndex(x => x.text === this.productToUpdate);
    let updateProduct = this.tiles[i];
    updateProduct.text = this.newProductName;
    this.tiles.splice(i, 1);
    this.tiles.push(updateProduct);
  }

  read(tile:Tile){
    this.selectedTile = tile;
  }
}
