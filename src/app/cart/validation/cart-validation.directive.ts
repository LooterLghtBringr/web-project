import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';
import { Directive, Input } from '@angular/core';

import { HttpService } from '../service/http.service';
@Directive({
  standalone:true,
  selector: 'input[cartname]',
  providers: [{
    provide: NG_VALIDATORS,
    useExisting: CartValidationDirective,
    multi:true
  }]
})


export class CartValidationDirective implements Validator {


  constructor(private http: HttpService) {
  }
  // @Input() cartname: string;
  validate(control: AbstractControl<any, any>): ValidationErrors | null {

    const value = control.value;

      if(isNaN(value)){
        return null; 
      }
   
      return {error:{} }
 
}
}
