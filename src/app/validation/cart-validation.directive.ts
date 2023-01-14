import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';
import { Directive, Input } from '@angular/core';
@Directive({
  selector: 'input[cartname]',
  providers: [{
    provide: NG_VALIDATORS,
    useExisting: CartValidationDirective,
    multi:true
  }]
})


export class CartValidationDirective implements Validator {

  // @Input() cartname: string;
  validate(control: AbstractControl<any, any>): ValidationErrors | null {

    const value = control.value; 

    if(value == "M"){
      return null; 
    }
     

    // if value does not exist, return null; 
    return null;
  }
}
