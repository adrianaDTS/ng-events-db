import { Component, Input, Output, EventEmitter } from '@angular/core';



@Component({
  selector: 'event-thumbnail',
  template: `
  <article class="well hoverwell thumbnail">
    <h2 h2 > {{ event.name }}</h2>
    <p> Date: {{ event.date }}</p>
    <p> Time: {{ event.time }}</p>
    <p> Price: {{ event.price }} €</p>
    <p>
    <span>Location: {{ event.location.address }}, {{ event.location.city }},
  {{ event.location.country }}</span>
  </p>
  <button class="btn btn-primary" (click)="handleClickMe()"> Click me! </button>
</article>
`
})

export class EventsThumbnailComponent {

  // This Input tells Angular that this event will be passed from another component. This Input is used when building a child component in order to give that child component their data
  @Input() event: any;
  // The Output is often used in response to some event whitin a child component
  @Output() eventClick = new EventEmitter();

  handleClickMe() {
    console.log('Man clikao');

    // data that is being outputted when the button is clicked. You can only passed a single value with the eventEmitter. To pass multiple values, you can wrapp them in an object
    this.eventClick.emit('foo');

  }

  // we can access these methods and properties using the #thumbnail template variable
  someProperty:any = "Some random property"

  // these public methods & properties can be access from the mother component
  logFoo() { console.log('foo'); }


}