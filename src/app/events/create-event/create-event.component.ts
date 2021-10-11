import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { EventService } from "../shared/index";

@Component({
  templateUrl: './create-event.component.html',
  styleUrls: ['../../user/login.component.scss', '../../user/profile.component.scss']
})

export class CreateEventComponent {
  newEvent;
  // public property
  isDirty: boolean = true;

  constructor(private router: Router, private eventService: EventService) { }

  saveEvent(formValues) {
    this.eventService.saveEvent(formValues);
    this.isDirty = false;
    this.router.navigate(['/events']);
  }

  cancel() {
    this.router.navigate(['/events']);
  }
}