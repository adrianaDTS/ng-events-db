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
  SessionListComponent
} from './events/index';

import { EventsAppComponent } from './app.component';
import { NavBarComponent } from './nav/navbar-component';
import { appRoutes } from './routes';
import { Error404Component } from './errors/404.component';

// Common components
import { CollapsibleWellComponent } from './commons/collapsible-well.component';

// Services (providers)
import { ToastrService } from './commons/toastr.service';
import { AuthService } from './user/auth.service';

// Icons library
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

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
    CollapsibleWellComponent
  ],

  // Services are added as providers.
  // Providers are shared among NgModules, but is not the same for imports and declarations
  providers: [
    EventService,
    ToastrService,
    EventRouteActivator,
    EventListResolver,
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

