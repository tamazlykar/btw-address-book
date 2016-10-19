import { Directive, ElementRef, AfterViewInit } from '@angular/core';

@Directive({
  selector: '[focusMe]'
})
export class FocusDirective implements AfterViewInit {
  constructor(private el: ElementRef) {}

  ngAfterViewInit() {
    this.el.nativeElement.focus();
  }
}