import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {StateEnum} from './state-enum';
import {FormsModule} from '@angular/forms';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  state = StateEnum.LOGIN;
  user = {username: '', password: ''};
  registerUsername = '';
  registerPassword = '';
  error = false;
  errorMessage = '';
  pwResetSuccess = false;

  stateEnum = StateEnum;

  constructor(
    //private auth: AuthenticateService,
    private router: Router) {
  }

  ngOnInit(): void {
  }

  login() {
    this.error = false;
    this.errorMessage = '';
    // this.auth.authenticate(this.user).subscribe(response => {
    //   if (response.ok) {
    //     this.auth.authenticated = true;
    //     this.router.navigateByUrl('/');
    //   } else {
    //     this.auth.authenticated = false;
    //     this.error = true;
    //     this.errorMessage = 'Username oder Passwort falsch!'
    //   }
    //
    // });
    return false;
  }

  register() {
    this.error = false;
    this.errorMessage = '';
    this.state = StateEnum.REGISTER;
  }

  back() {
    this.error = false;
    this.errorMessage = '';
    this.pwResetSuccess = false;
    this.state = StateEnum.LOGIN;
  }

  resetPW() {
    this.error = false;
    this.errorMessage = '';
    this.pwResetSuccess = false;
    this.state = StateEnum.RESET;
  }

  send() {
    this.error = false;
    this.errorMessage = '';
    this.pwResetSuccess = false;

    if (this.state === StateEnum.REGISTER) {
      if (this.user.username !== this.registerUsername) {
        this.error = true;
        this.errorMessage = 'E-Mailadressen müssen ident sein!';
        return;
      }

      if (this.user.password !== this.registerPassword) {
        this.error = true;
        this.errorMessage = 'Passwörter müssen ident sein!';
        return;
      }

      // this.auth.registerUser(this.user).subscribe(response => {
      //   if (response.ok) {
      //     this.router.navigateByUrl('/');
      //   } else {
      //     this.error = true;
      //     this.errorMessage = 'Registrieren nicht möglich. E-Mail existiert bereits!'
      //   }
      //
      // });
    } else {
      // this.auth.resetPW(this.user).subscribe(response => {
      //   if (response.ok) {
      //     this.pwResetSuccess = true;
      //   }
      // });
    }
  }
}
