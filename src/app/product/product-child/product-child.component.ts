import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Cocktail } from '../view/products.component';

@Component({
  selector: 'app-product-child',
  templateUrl: './product-child.component.html',
  styleUrls: ['./product-child.component.scss']
})
export class ProductChildComponent {
  @Input() item: Cocktail | undefined;
}
