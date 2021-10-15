import { Component, Input } from '@angular/core';
import { IEvent } from '../index';



@Component({
  selector: 'event-thumbnail',
  templateUrl: './events-thumbnail.component.html',
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