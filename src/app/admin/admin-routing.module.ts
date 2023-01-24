import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {AdminViewComponent} from './admin-view/admin-view.component';
import {AdminEditComponent} from './admin-edit/admin-edit.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        redirectTo: 'view',
        pathMatch: 'full'
      },
      {
        path: 'edit/:id',
        component: AdminEditComponent
      },
      {
        path: 'edit',
        component: AdminEditComponent
      },
      {
        path: 'view',
        component: AdminViewComponent
      },
      {
        path: 'login',
        component: LoginComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {
}
