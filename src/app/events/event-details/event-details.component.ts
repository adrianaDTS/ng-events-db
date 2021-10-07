import { Component } from "@angular/core";
import { EventService } from "../shared/event.service";
import { ActivatedRoute } from "@angular/router";
import { IEvent } from '../shared/index';

@Component({
  templateUrl: './event-details.component.html',
  styles: [`
  .container { padding: 0 20px; }
  .event-image { height: 100px; }
  .pad-left { margin-left: 5px; }
  `]

})

export class EventDetailsComponent {
  event: IEvent;
  constructor(private eventService: EventService, private route: ActivatedRoute) {

  }

  ngOnInit() {
    // '+' is used to cast a number
    this.event = this.eventService.getEvent(+this.route.snapshot.params['id']);
  }
}