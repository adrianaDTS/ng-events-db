import { Component, ElementRef, Inject, Input, ViewChild } from "@angular/core";
import { JQ_TOKEN } from "../jQuery.service";


@Component({
  selector: 'simple-modal',
  templateUrl: './simple-modal.component.html',
  styles: [`
  .modal-body {
  height: 300px;
  overflow-y: scroll;
}`]
})


export class SimpleModalComponent {
  @Input() title: string;
  @Input() elementId: string;
  // ViewChild is a decorator. A string is passed to it, that indicates an Angular2 local ref variable
  @ViewChild('modalcontainer') containerEl: ElementRef;

  constructor(@Inject(JQ_TOKEN) private $: any) { }

  closeModal() {
    //  We need to access the DOM node
    this.$(this.containerEl.nativeElement).modal('hide');
  }
}