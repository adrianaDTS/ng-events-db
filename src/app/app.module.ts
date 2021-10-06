import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { EventsAppComponent } from './app.component';
import { EventDetailsComponent } from './events/event-details/event-details.component';
import { EventsListComponent } from './events/events-list.component';
import { EventsThumbnailComponent } from './events/events-thumbnail.component';
import { NavBarComponent } from './nav/navbar-component';
import { CreateEventComponent } from './events/create-event.component';
import { appRoutes } from './routes';
import { Error404Component } from './errors/404.component';

// Services (providers)
import { EventService } from './events/shared/event.service';
import { ToastrService } from './commons/toastr.service';
import { EventRouteActivator } from './events/event-details/event-route-activator.component';
import { EventListResolver } from './events/shared/events-list-resolver.service';

@NgModule({
  // Use for importing other modules
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
  ],

  // To add a component, pipe or directive, it must be firstly declared:
  declarations: [
    EventsAppComponent,
    EventsListComponent,
    EventsThumbnailComponent,
    EventDetailsComponent,
    NavBarComponent,
    CreateEventComponent,
    Error404Component
  ],

  // Services are added as providers
  providers: [
    EventService,
    ToastrService,
    EventRouteActivator,
    EventListResolver,
    {
      provide: 'canDeactivateCreateEvent',
      useValue: checkDirtyState
    }
  ],
  bootstrap: [EventsAppComponent]
})
export class AppModule { }

// for this function we need to know if the state of the new event is saved or not
// the first apramater in the canDeactive method is the event itself
export function checkDirtyState(component: CreateEventComponent) {
  if (component.isDirty)
    return window.confirm('You have not saved this event, do you really want to cancel?');

  return true;
}

