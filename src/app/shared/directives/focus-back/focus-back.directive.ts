import { Directive, OnDestroy, OnInit } from "@angular/core";

@Directive({
  selector: '[appFocusBack]'
})

export class FocusBackDirective implements OnInit, OnDestroy{

  private lasFocusedElement: Element;
  public ngOnInit(): void {
    this.lasFocusedElement = document.activeElement;
  }

  public ngOnDestroy(): void {
    if(this.lasFocusedElement){
      (this.lasFocusedElement as HTMLElement).focus();
    }
  }

}
