import {NgModule} from '@angular/core';
import {ProductRoutingModule} from './product-routing.module';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {ProductsComponent} from './view/products.component';
import {MatSelectModule} from '@angular/material/select';
import {ProductsValidationService} from './validation/products-validation.service';
import {MatGridListModule} from '@angular/material/grid-list';


@NgModule({
  declarations: [ProductsComponent],
  imports: [
    ProductRoutingModule,
    CommonModule,
    FormsModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatToolbarModule,
    MatSelectModule,
    MatGridListModule
  ]
})
export class ProductModule {
}
