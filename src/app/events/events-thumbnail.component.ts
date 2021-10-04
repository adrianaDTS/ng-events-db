import { Component, Input } from '@angular/core';



@Component({
  selector: 'event-thumbnail',
  template: `
  <article class="well hoverwell thumbnail">
    <h2 h2 > {{ event.name }}</h2>
    <p> Date: {{ event.date }}</p>
    <p> Time: {{ event.time }}</p>
    <p> Price: {{ event.price }} €</p>
    <p>
    <span>Location: {{ event.location.address }},</span>
    <span class="pad-left">{{ event.location.city }}, {{ event.location.country }}</span>
    </p>
  </article>
  `,
  styles: [`
    .pad-left { margin-left: 5px; }
    .well p { color: #bbb; }
  `]
})

export class EventsThumbnailComponent {

  // This Input tells Angular that this event will be passed from another component. This Input is used when building a child component in order to give that child component their data
  @Input() event: any;


}