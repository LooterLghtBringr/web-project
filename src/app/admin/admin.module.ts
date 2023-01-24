import {NgModule} from '@angular/core';
import {AdminRoutingModule} from './admin-routing.module';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {LoginComponent} from './login/login.component';
import {AdminViewComponent} from './admin-view/admin-view.component';
import {MatGridListModule} from '@angular/material/grid-list';
import {AdminEditComponent} from './admin-edit/admin-edit.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {UserChildComponent} from './user-child/user-child.component';
import {PasswordValidatorDirective} from './validation/password-validator.directive';


@NgModule({
  declarations: [LoginComponent, AdminViewComponent, AdminEditComponent, UserChildComponent, PasswordValidatorDirective],
  imports: [
    AdminRoutingModule,
    CommonModule,
    FormsModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatGridListModule,
    MatFormFieldModule,
    ReactiveFormsModule
  ]
})
export class AdminModule {
}
