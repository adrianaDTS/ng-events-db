import { Component, Input } from '@angular/core';
import { IEvent } from './index';



@Component({
  selector: 'event-thumbnail',
  template: `
  <article [routerLink]="['/events', event.id]" class="well hoverwell thumbnail">
    <h2 h2 > {{ event?.name }}</h2>
    <p> Date: {{ event?.date }}</p>
    <p [ngClass]="getStartTimeClass()" [ngSwitch]="event?.time"> Time: {{ event?.time }}
      <span *ngSwitchCase="'8:00 am'">(Early Start)</span>
      <span *ngSwitchCase="'10:00 am'">(Late Start)</span>
      <span *ngSwitchDefault>(Normal Start)</span>
    </p>

    <p> Price: {{ event?.price }} €</p>
    <!-- The p element is not render if the location doesn't exits -->
    <p *ngIf="event?.location">
    <span>Location: {{ event?.location?.address }},</span>
    <span class="pad-left">{{ event?.location?.city }}, {{ event?.location?.country }}</span>
    </p>
    <!--  The p element is hidden if the onlineUrl doesn't exist -->
    <p [hidden]="!event?.onlineUrl">Online URL:<a [href]="event?.onlineUrl" class="pad-left">{{ event?.onlineUrl }}</a> </p>
  </article>
  `,
  styles: [`
    .green { color: #003300 !important; }
    .bold { font-weight: bold; }
    .thumbnail { min-height: 260px; }
    .pad-left { margin-left: 5px; }
    .well p { color: #bbb; }
  `]
})

export class EventsThumbnailComponent {

  // This Input tells Angular that this event will be passed from another component. This Input is used when building a child component in order to give that child component their data
  @Input() event: IEvent;

  getStartTimeClass():any {
    if (this.event && this.event.time === '8:00 am') {
      return 'green bold';
    }
    return '';
  }

}