import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ToastrService } from './commons/toastr.service';

import { EventsAppComponent } from './events-app.component';
import { EventsListComponent } from './events/events-list.component';
import { EventsThumbnailComponent } from './events/events-thumbnail.component';
import { EventService } from './events/shared/event.service';
import { NavBarComponent } from './nav/navbar-component';

@NgModule({
  // Use for importing other modules
  imports: [
    BrowserModule
  ],

  // To add a component, pipe or directive, it must be firstly declared:
  declarations: [
    EventsAppComponent,
    EventsListComponent,
    EventsThumbnailComponent,
    NavBarComponent
  ],

  // Services are added as providers
  providers: [
    EventService,
    ToastrService
  ],
  bootstrap: [EventsAppComponent]
})
export class AppModule { }
