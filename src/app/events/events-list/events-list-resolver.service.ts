import { Injectable } from "@angular/core";
import { Resolve } from "@angular/router";
import { EventService } from "../shared/event.service";
import { map } from 'rxjs/operators';


// this is an injectable service that implements resolve.
@Injectable()
export class EventListResolver implements Resolve<any> {
  constructor(private eventService: EventService) { }

  /* in the resolve method we will tipically make an asynchronos method call like
  an AJAX call, and when it returns, it will return its data */
  resolve() {

    // here, map does the same as subscribe
    return this.eventService.getEvents();
  }
}