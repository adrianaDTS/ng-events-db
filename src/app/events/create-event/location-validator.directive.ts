import { Directive } from "@angular/core";
import { FormGroup, Validator, NG_VALIDATORS } from "@angular/forms";

@Directive({
  selector: '[validateLocation]',
  /* In order for this validator to work, it need to be added to Angular's
  list of validators (NG_VALIDATORS opaque token).
  To add this validator to the list of ng validators, first we need to add
  a providers key & with "multi: true" at the end, so it doesn't erase
  the services */
  providers: [{ provide: NG_VALIDATORS, useExisting: LocationValidator, multi: true }],
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
