import {NgModule} from '@angular/core';
import {CartRoutingModule} from './cart-routing.module';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {CartComponent} from './view/cart.component';
import {CartValidationDirective} from './validation/cart-validation.directive';
import {MatGridListModule} from '@angular/material/grid-list';
import { CartChildComponent } from './cart-child/cart-child.component';


@NgModule({
  declarations: [
    CartComponent,
    CartChildComponent
  ],
  imports: [
    CartValidationDirective,
    CartRoutingModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatToolbarModule,
    MatGridListModule
  ]
})
export class CartModule {
}
