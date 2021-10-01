import { Component } from "@angular/core";

@Component({
  selector: 'events-list',
  templateUrl: 'events-list.components.html'
})

export class EventsListComponent {
  event = {
    id: 1,
    name: 'MABULO',
    date: 'NUNQUI',
    time: '12:00 pm',
    price: '42',
    imgUrl: '/assets/images/avatar_lightblue.png',
    location: {
      address: 'Gran Vía, 32',
      city: 'Madrid',
      country: 'Spain'
    }
  };
}