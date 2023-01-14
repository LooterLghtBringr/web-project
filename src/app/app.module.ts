import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {LoginComponent} from './login/login.component';
import {FormsModule} from "@angular/forms";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatCardModule} from "@angular/material/card";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {MatToolbarModule} from "@angular/material/toolbar";
import { ProductsComponent } from './products/products.component';
import { CartComponent } from './cart/cart.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import { HttpClientModule } from '@angular/common/http';
import { CartValidationDirective } from './validation/cart-validation.directive';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ProductsComponent,
    CartComponent,
    CartValidationDirective
  ],
  imports: [
    MatGridListModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatToolbarModule,
    NoopAnimationsModule,
    MatSlideToggleModule,
    MatGridListModule,
    MatFormFieldModule,
    MatSelectModule,
    HttpClientModule
  ],
  exports: [
    MatSlideToggleModule,
    MatGridListModule,
    MatButtonModule,
    MatFormFieldModule,
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
