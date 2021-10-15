import { Component, Input } from "@angular/core";
import { ISession } from "../shared/index";
import { faFire } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'session-list',
  templateUrl: './session-list.component.html',
  styles: [`
  .well-title {transition: 0.4s linear all;}
  .well-title:hover { transform: scale(1.04);}
  .well-title fa-icon {margin-left:10px; color: #f97924}`]

})

export class SessionListComponent {
  @Input() sessions: ISession[];

  faFire = faFire;
}