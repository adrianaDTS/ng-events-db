import { Component, Input } from "@angular/core";
import {faPlusCircle, faMinusCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'collapsible-well',
  templateUrl: './collapsible-well.component.html',
  styleUrls: ['./collapsible-well.component.scss']
})

export class CollapsibleWellComponent {
  visible: boolean = false;

  // Icons
  plusIcon = faPlusCircle;
  minusIcon = faMinusCircle;

  toggleContent() {
    this.visible = !this.visible;
  }
}