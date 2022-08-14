import { Directive, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appListListener]'
})
export class ListListenerDirective {

  @Input('appListListener')
  borderSet!: string;

  @HostBinding('style.border')
  borderColor!: string;

  constructor() { }

  @HostListener('mouseenter')
  mouseOver(eventData: Event){
    this.borderColor = this.borderSet;
  }

  @HostListener('mouseleave')
  mouseLeave(eventData: Event){
    this.borderColor = 'none';
  }
}
