import { ProductsComponent } from './products/products.component';
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {CartComponent} from './cart/cart.component'; 



const routes: Routes = [
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent}, 

  {path: 'cart', component: CartComponent}, 
  {path: '', redirectTo: '/products', pathMatch: 'full'},
  {path: 'products', component: ProductsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
