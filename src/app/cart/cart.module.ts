import {NgModule} from '@angular/core';
import {CartRoutingModule} from './cart-routing.module';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {CartComponent} from './view/cart.component';
import {CartValidationDirective} from './validation/cart-validation.directive';
import {MatGridListModule} from '@angular/material/grid-list';


@NgModule({
  declarations: [
    CartComponent,
    CartValidationDirective
  ],
  imports: [
    CartRoutingModule,
    CommonModule,
    FormsModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatToolbarModule,
    MatGridListModule
  ]
})
export class CartModule {
}
