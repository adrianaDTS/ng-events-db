import { Component } from '@angular/core';
import { AuthService } from './user/auth.service';

@Component({

  // HTML tag to use in order to display the component:
  selector: 'events-app',
  template: `
    <nav-bar></nav-bar>
    <router-outlet></router-outlet>
`,
  styleUrls: ['./app.component.scss']
})

export class EventsAppComponent {
  constructor(private auth: AuthService) { }

  ngOnInit() {
    this.auth.checkAuthenticationStatus();
  }
}
