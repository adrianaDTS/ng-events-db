import { ActivatedRouteSnapshot, CanActivate, Router } from "@angular/router";
import { Injectable } from "@angular/core";
import { EventService } from "../shared/event.service";

@Injectable()
export class EventRouteActivator implements CanActivate {
  constructor(private eventService: EventService, private router: Router) { }


  // to prevent the user to navigate to unexisting pages
  // '!!' is used to cast to boolean, and '+? to cast to number
  canActivate(route: ActivatedRouteSnapshot) {
    const eventExist = !!this.eventService.getEvent(+route.params['id']);

    if (!eventExist)
      this.router.navigate(['/404']);
    return eventExist;

  }
}
