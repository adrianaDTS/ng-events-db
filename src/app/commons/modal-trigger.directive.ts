// decorator that angular provide to create Directives
import { Directive, OnInit, Inject, ElementRef } from "@angular/core";
import { JQ_TOKEN } from "./jQuery.service";

@Directive({
  // the selector is between brackets so it knows is an attribute, and not an element
  selector: '[modal-trigger]',
})

export class ModalTriggerDirective {
  private el: HTMLElement;

  // the "ref" element tells Angular when this directive is constructed, we also want to reference to the element that it's on
  constructor(ref: ElementRef, @Inject(JQ_TOKEN) private $: any) {
    this.el = ref.nativeElement;
  }

  ngOnInit() {
    this.el.addEventListener('click', ev => {
      this.$('#simple-modal').modal({});
    });
  }
}