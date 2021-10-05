import { Component } from '@angular/core';

@Component({

  // HTML tag to use in order to display the component:
  selector: 'events-app',
  template: `
    <nav-bar></nav-bar>
    <events-list></events-list>
`,
  styleUrls: ['./events-app.component.scss']
})
export class EventsAppComponent {
  title = 'ng-events-db';
}
