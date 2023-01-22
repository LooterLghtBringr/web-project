import { FormControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export function validatePrice(control: FormControl): ValidationErrors | null {
    const value = control.value; 
    if (value < 0) { 
        return {price: {
            value: control.value
        }};
    }
    return null;
}

export function validateId(control: FormControl): ValidationErrors | null {
    const value = control.value; 
    if (value <= 0) {
        return {id: {
            value: control.value
        }};
    }
    return null;
}