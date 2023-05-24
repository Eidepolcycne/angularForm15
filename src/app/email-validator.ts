import { AbstractControl, ValidationErrors } from "@angular/forms";

export function emailvalidator(control: AbstractControl): ValidationErrors | null {
  const emailRegex =  RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))/i);
  const valid = emailRegex.test(control.value);
  const errors = {
    email: {
      rules: 'doit être un email valid'
    }
  };
  return !valid ? errors : null;
}