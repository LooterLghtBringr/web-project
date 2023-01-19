import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {path: '', redirectTo: '/products', pathMatch: 'full'},
  {
    path: 'admin', loadChildren: () => import('./admin/admin.module')
      .then(esm => esm.AdminModule)
  },
  {
    path: 'cart', loadChildren: () => import('./cart/cart.module')
      .then(esm => esm.CartModule)
  },
  {
    path: 'products', loadChildren: () => import('./product/product.module')
      .then(esm => esm.ProductModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
