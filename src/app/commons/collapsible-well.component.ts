import { Component, Input } from "@angular/core";
import {faPlusCircle, faMinusCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'collapsible-well',
  template: `
  <div (click)="toggleContent()" class="well pointable well-collapsible">
    <div class="well-header">
      <h4 class="well-title">{{title}}</h4>
      <fa-icon *ngIf="!visible" [icon]="faPlusCircle"></fa-icon>
      <fa-icon *ngIf="visible" [icon]="faMinusCircle"></fa-icon>
    </div>
    <ng-content *ngIf="visible"></ng-content>
  </div>`,
  styleUrls: ['./collapsible-well.component.scss']
})

export class CollapsibleWellComponent {
  @Input() title: string;
  visible: boolean = false;

  faPlusCircle = faPlusCircle;
  faMinusCircle = faMinusCircle;

  toggleContent() {
    this.visible = !this.visible;
  }
}