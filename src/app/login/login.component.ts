import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  user = { username: '', password: '' };
  registerUsername = '';
  registerPassword = '';
  error = false;
  errorMessage = '';
  loginMode = true;
  registerMode = false;
  pwResetMode = false;
  pwResetSuccess = false;

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
    this.loginMode = false;
    this.registerMode = true;
  }

  back() {
    this.error = false;
    this.errorMessage = '';
    this.loginMode = true;
    this.registerMode = false;
    this.pwResetMode = false;
    this.pwResetSuccess = false;
  }

  resetPW() {
    this.error = false;
    this.errorMessage = '';
    this.pwResetMode = true;
    this.loginMode = false;
    this.registerMode = false;
    this.pwResetSuccess = false;
  }

  send() {
    this.error = false;
    this.errorMessage = '';
    this.pwResetSuccess = false;

    if (this.registerMode) {
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
