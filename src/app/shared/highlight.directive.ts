import {Directive, HostBinding, HostListener, Input, OnInit} from '@angular/core';

@Directive({
  selector: '[highlight]'
})
export class HighlightDirective implements OnInit{

  @HostListener("mouseenter")
  onMouseOver(){
    this.background = this.highlightColor
  }

  @HostListener("mouseleave")
  onMouseLeft(){
    this.background = this.defaultColor;
  }

  @HostBinding("style.background")
  background : string = "";

  @Input()
  defaultColor: string = "white";
  @Input("highlight")
  highlightColor: string = "green"

  constructor() { }

  ngOnInit(): void {
        this.background = this.defaultColor;
    }
}
