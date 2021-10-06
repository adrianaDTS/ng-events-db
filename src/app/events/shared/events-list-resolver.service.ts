import { Injectable } from "@angular/core";
import { Resolve } from "@angular/router";
import { EventService } from "./event.service";
import { map } from 'rxjs/operators';


// this is an injectable service that implements resolve.
@Injectable()
export class EventListResolver implements Resolve<any> {
  constructor(private eventService: EventService) { }

  // in the resolve methos we will tipicalle make an asynchronos method call like and AJAX call, and when it return, it will return their data
  resolve() {

    // here, map does the same as subscribe
    return this.eventService.getEvents().pipe(map(events => events));
  }
}