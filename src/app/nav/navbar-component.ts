import { Component } from '@angular/core';
import { EventService } from '../events/index';
import { AuthService } from '../user/auth.service';
import { ISession } from '../events/shared/index';

@Component({
  selector: 'nav-bar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})

export class NavBarComponent {
  searchTerm: string = '';
  foundSessions: ISession[];

  constructor(public auth: AuthService, private eventService: EventService) {

  }

  /* The search service is going to be outside the navbar component,
  and is going to be provided by EventService */
  searchSessions(searchTerm) {
    this.eventService.searchSessions(searchTerm).subscribe(sessions => {
      this.foundSessions = sessions;
      console.log(this.foundSessions);

    });
  }

}