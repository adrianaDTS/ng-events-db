import { Component, OnInit } from "@angular/core";
import { EventService } from "../shared/event.service";
import { ActivatedRoute, Params } from "@angular/router";
import { IEvent, ISession } from '../shared/index';

@Component({
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.scss']

})

export class EventDetailsComponent implements OnInit {
  event: IEvent;
  addMode: boolean;
  filterBy: string = 'all';
  sortBy: string = 'votes';

  constructor(private eventService: EventService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.data.forEach((data) => {
      this.event = data['event'];
      this.addMode = false;
    });
  }

  // TODO deprecated code that need to go to leaninr branch
  // ngOnInit() {
  //   // '+' is used to cast a number
  //   this.route.params.forEach((params: Params) => {
  //     this.eventService.getEvent(+params['id']).subscribe((event: IEvent) => {});
  //     this.addMode = false;
  //   });
  // }

  addSession() {
    this.addMode = true;
  }

  saveNewSession(session: ISession) {
    const nextId = Math.max.apply(null, this.event.sessions.map(sess => sess.id));
    session.id = nextId + 1;
    this.event.sessions.push(session);
    // empty call to 'subscribe' because we feel optimistic XD
    this.eventService.saveEvent(this.event).subscribe();
    this.addMode = false;

  }

  cancelAddSession() {
    this.addMode = false;
  }
}