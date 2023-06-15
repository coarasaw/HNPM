import { AbstractControl } from '@angular/forms';

export class MyValidations {

  static isCaptchaWithParam(primerParam: string) {

    return (control: AbstractControl) =>{
      console.log('MyValidationprimerParam ',primerParam);
      const value = control.value;
      console.log('MyValidationValue ',value);
      if(primerParam != value) {
        console.log("retur true");
        return { isCaptcha: true };
      }
      console.log("retur false");
      return null;
    };
  }
}
