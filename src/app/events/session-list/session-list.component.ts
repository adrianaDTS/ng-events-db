import { Component, Input, OnChanges } from "@angular/core";
import { ISession } from "../shared/index";
import { faFire } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'session-list',
  templateUrl: './session-list.component.html',
  styleUrls: ['session-list.component.scss']

})

export class SessionListComponent implements OnChanges {
  @Input() sessions: ISession[];
  @Input() filterBy: string;
  @Input() sortBy: string;
  visibleSessions: ISession[] = [];

  // This method (PnChanges) is going to be called everytime a value changes
  ngOnChanges() {
    if (this.sessions) {
      this.filterSession(this.filterBy);
      this.sortBy === 'name'
        /* sort is a mutating method, it doesn't create a new array,
        it sorted it in place */
        ? this.visibleSessions.sort(sortByNameAsc)
        : this.visibleSessions.sort(sortByVotesDesc);
    }
  }

  filterSession(filter) {
    if (filter === 'all') {
      // the original array of sessions needs to be cloned. The slice method could create a duplicate of it.
      this.visibleSessions = this.sessions.slice(0);
    } else {
      // here is created a complete new array with the filtered sessions
      this.visibleSessions = this.sessions.filter(session => {
        return session.level.toLocaleLowerCase() === filter;
      });
    }
  }

  // Icons
  faFire = faFire;
}

/* The stateless functions don't need to be inside the class,
they can be mplemented outside of it. */

function sortByNameAsc(s1: ISession, s2: ISession) {
  if (s1.name > s2.name) { return 1; }
  else if (s1.name === s2.name) { return 0; }
  else { return -1; };
}

function sortByVotesDesc(s1: ISession, s2: ISession) {
  return s2.voters.length - s1.voters.length;
}
