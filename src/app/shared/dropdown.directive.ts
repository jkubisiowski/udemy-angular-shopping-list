import { Directive, HostListener, ElementRef, Renderer2, HostBinding } from "@angular/core";

@Directive({
  selector: "[appDropdown]"
})
export class DropdownDirective {
  @HostBinding("class.open") isOpen = false;

  constructor(public el: ElementRef, public renderer: Renderer2) {}

  @HostListener("click")
  toggleOpen() {
    this.isOpen = !this.isOpen;
  }
}
