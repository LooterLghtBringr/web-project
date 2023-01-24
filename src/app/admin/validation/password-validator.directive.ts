import {Directive} from '@angular/core';
import {AbstractControl, NG_VALIDATORS, ValidationErrors, Validator} from '@angular/forms';

@Directive({
  selector: 'input[appPasswordValidator]',
  providers: [{
    provide: NG_VALIDATORS,
    useExisting: PasswordValidatorDirective,
    multi: true
  }]
})
export class PasswordValidatorDirective implements Validator {

  constructor() {
  }

  validate(control: AbstractControl<any, any>): ValidationErrors | null {

    const regex = new RegExp('^.*(?=.{8,})(?=.*[a-zA-Z])(?=.*\\d)(?=.*[!#$%&? "]).*$')

    if (control.value && !regex.test(control.value)) {

      return {
        password: 'password'
      };
    }
    return null;
  }
}
