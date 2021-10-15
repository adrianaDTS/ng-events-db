import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { ToastrService } from "../../commons/toastr.service";
import { EventService } from "./../shared/event.service";
import { IEvent } from './../index';


declare let toastr;
@Component({
  template: `
  <article>
    <h1>Upcoming Events</h1>
    <hr />
    <div class="row">
      <div *ngFor="let event of events" class="col-md-6">
        <event-thumbnail (click)="handleThumbnailClick(event.name)" [event]='event'></event-thumbnail>
      </div>
    </div>
  </article>
`
})

export class EventsListComponent {
  events: IEvent[];

  /* It's not a good idea to put things that are going to be long running in
  the constructor, but eventually this part will be an AJAX request. */
  constructor(private eventService: EventService, private toastr: ToastrService, private route: ActivatedRoute) {

  }

  // Life cycle event that is called when the component is being loaded
  ngOnInit() {
    this.events = this.route.snapshot.data['events'];
  }

  handleThumbnailClick(eventName) {
    this.toastr.info(eventName);
  }
}