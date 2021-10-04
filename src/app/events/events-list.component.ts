import { Component } from "@angular/core";

@Component({
  selector: 'events-list',
  template: `
  <article>
    <h1>Upcoming Events</h1>
    <hr />
    <event-thumbnail #thumbnail (eventClick)="handleEventClicked($event)" [event]='event1'></event-thumbnail>
    <h3>{{thumbnail.someProperty}}</h3>
    <button class="btn btn-secondary" (click)="thumbnail.logFoo()"> Log me some foo </button>
  </article>
`
})

export class EventsListComponent {
  event1 = {
    id: 1,
    name: 'MABULO',
    date: '27/12/2021',
    time: '12:00 pm',
    price: '42',
    imgUrl: '/assets/images/avatar_lightblue.png',
    location: {
      address: 'Gran Vía, 32',
      city: 'Madrid',
      country: 'Spain'
    }
  };

  handleEventClicked(data) {
    console.log(this.event1.name, data);
  }
}