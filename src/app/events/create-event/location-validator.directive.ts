import { Directive } from "@angular/core";
import { FormGroup, Validator } from "@angular/forms";

@Directive({
  selector: '[validateLocation]',
})

export class LocationValidator implements Validator {
  validate(formGroup: FormGroup): { [key: string]: any; } {
    let addressControl = formGroup.controls['address'];
    let cityControl = formGroup.controls['city'];
    let countryControl = formGroup.controls['country'];
    // Here we need to go up a level, since onlineUrl and Location are siblings
    let onlineUrlControl = (<FormGroup>formGroup.root).controls['onlineUrl'];


    if ((addressControl && addressControl.value &&
      cityControl && cityControl.value &&
      countryControl && countryControl.value)
      || (onlineUrlControl && onlineUrlControl.value)) {

      // The null return is telling that the validator has passed, there's no problem.
      return null;
    } else {
      return { validateLocation: false };
    }
  }
}