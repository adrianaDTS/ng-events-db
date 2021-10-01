import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { EventsAppComponent } from './events-app.component';
import { EventsListComponent } from './events/events-list.components';

@NgModule({
  // Use for importing other modules
  imports: [
    BrowserModule
  ],

  // To add a component, pipe or directive, it must be firstly declared:
  declarations: [
    EventsAppComponent,
    EventsListComponent
  ],

  // Services are added as providers
  providers: [],
  bootstrap: [EventsAppComponent]
})
export class AppModule { }
