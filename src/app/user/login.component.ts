import { Component } from "@angular/core";
import { AuthService } from "./auth.service";
import { Router } from "@angular/router";

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent {
  // these fields are not going to be use directly in the omponent, but Angular required them to be here for the ngModel data binding
  userName;
  password;
  mouseoverLogin;

  constructor(private authService: AuthService, private router: Router) {

  }

  login(formValues) {
    this.authService.loginUser(formValues.username, formValues.password);
    this.router.navigate(['events']);
  }

  cancel() {
    this.router.navigate(['events']);
  }
}

