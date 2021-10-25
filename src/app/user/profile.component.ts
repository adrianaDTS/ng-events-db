import { Component, OnInit, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TOASTR_TOKEN, Toastr } from '../commons/toastr.service';

import { AuthService } from './auth.service';

@Component({
  templateUrl: './profile.component.html',
  styleUrls: ['./login.component.scss', './profile.component.scss']
})



export class ProfileComponent implements OnInit {
  profileForm: FormGroup;
  private firstName: FormControl;
  private lastName: FormControl;

  constructor(private router: Router,
    /* here we registered the AuthService class, and Angular 2
    creates an instance of that class and gives us that instance
    whenever we reference it in a constructor function */
    private authService: AuthService,

    /* Inject is a decorator, just like Component, that allows to
    use a separete Token besides the type of the constructor parameter */
    @Inject(TOASTR_TOKEN) private toastr: Toastr) { };

  ngOnInit() {

    // the parameters here are to prepopulate the firstName and lastName inputs
    // the validators can have multiple validating steps (in an array)
    this.firstName = new FormControl(
      this.authService.currentUser.firstName,
      [Validators.required, Validators.pattern('[a-zA-Z].*')]
    );

    this.lastName = new FormControl(
      this.authService.currentUser.lastName,
      Validators.required
    );

    this.profileForm = new FormGroup({
      firstName: this.firstName,
      lastName: this.lastName
    });
  }

  saveProfile(formValues) {
    if (this.profileForm.valid) {
      this.authService.updateCurrentUser(
        formValues.firstName, formValues.lastName)
        .subscribe(() => { this.toastr.success('Profile saved! 🥳'); });
    }
  }

  // the validation can be implement in the component file, so it can be unit tested
  validateFirstName() {
    return this.firstName.valid ||
      this.firstName.untouched;
  }

  validateLastName() {
    return this.lastName.valid ||
      this.lastName.untouched;
  }

  cancel() {
    this.router.navigate(['events']);
  }
}