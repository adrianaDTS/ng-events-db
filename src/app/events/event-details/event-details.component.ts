import { Component } from "@angular/core";
import { EventService } from "../shared/event.service";
import { ActivatedRoute } from "@angular/router";
import { IEvent, ISession } from '../shared/index';

@Component({
  templateUrl: './event-details.component.html',
  styles: [`
  .container { padding: 0 20px; }
  .event-image { height: 100px; }
  .pad-left { margin-left: 5px; }
  a { cursor: pointer; }
  .header { display: flex; justify-content: space-between; align-items: flex-end;}
  .header > h3, a {margin: 5px;}
  `]

})

export class EventDetailsComponent {
  event: IEvent;
  addMode: boolean;

  constructor(private eventService: EventService, private route: ActivatedRoute) { }

  ngOnInit() {
    // '+' is used to cast a number
    this.event = this.eventService.getEvent(+this.route.snapshot.params['id']);
  }

  addSession() {
    this.addMode = true;
  }

  saveNewSession(session: ISession) {
    const nextId = Math.max.apply(null, this.event.sessions.map(sess => sess.id));

    session.id = nextId + 1;

    this.event.sessions.push(session);
    this.eventService.updateEvent(this.event);
    this.addMode = false;

  }

  cancelAddSession() {
    this.addMode = false;
  }
}