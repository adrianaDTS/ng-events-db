import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, ActivatedRouteSnapshot } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {
  EventDetailsComponent,
  EventsListComponent,
  EventsThumbnailComponent,
  EventService,
  CreateEventComponent,
  EventRouteActivator,
  EventListResolver,
  CreateSessionComponent,
  SessionListComponent,
  DurationPipe
} from './events/index';

import { EventsAppComponent } from './app.component';
import { NavBarComponent } from './nav/navbar-component';
import { appRoutes } from './routes';
import { Error404Component } from './errors/404.component';

// Common components
import { CollapsibleWellComponent } from './commons/collapsible-well/collapsible-well.component';

// Services (providers)
import { TOASTR_TOKEN, Toastr } from './commons/toastr.service';
import { AuthService } from './user/auth.service';

// Icons library
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

declare let toastr: Toastr;
@NgModule({
  // Use for importing other modules
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
    FontAwesomeModule
  ],

  // To add a component, pipe or directive, it must be firstly declared:
  declarations: [
    EventsAppComponent,
    EventsListComponent,
    EventsThumbnailComponent,
    EventDetailsComponent,
    NavBarComponent,
    CreateEventComponent,
    Error404Component,
    CreateSessionComponent,
    SessionListComponent,
    CollapsibleWellComponent,
    DurationPipe
  ],

  // Services are added as providers.
  // Providers are shared among NgModules, but is not the same for imports and declarations
  providers: [
    EventService,
    /* useExisting is also known as the "alias provider", and there's
    no so much scenarios when it will be used. E.g.: to minimize and API */

    /* useFactory is even more complex. You register a class and you're going to give this useFactory
    parameter a function that is a factory. You can after, call the function and pass in some parameters.
    This allows you to parameterize the creation of an object */
    {
      provide: TOASTR_TOKEN,
      useValue: toastr
    },
    /* This will be the same syntax as:
    { provide: EventRouteActivator, useClass: EventRouteActivator } */
    EventRouteActivator,
    EventListResolver,
    /* if someone ask for the AuthService, they're going to get an instance of the EventService:
    { provide: AuthService, useClass: EventService }
    This is used when you have a very specific kind of implementation of a class, but you have a generic
    class that you're using */
    AuthService,
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

