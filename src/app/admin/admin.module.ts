import {NgModule} from '@angular/core';
import {AdminRoutingModule} from './admin-routing.module';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {LoginComponent} from './login/login.component';


@NgModule({
  declarations: [LoginComponent],
  imports: [
    AdminRoutingModule,
    CommonModule,
    FormsModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule
  ]
})
export class AdminModule {
}
