import {Directive, ElementRef, HostBinding, HostListener, Renderer2, RendererStyleFlags2} from '@angular/core';

@Directive({
  selector: '[highlightMouse]'
})
export class HighlightMouseDirective {

  @HostListener("mouseenter")
  onMouseOver() {
    // this.renderer.setStyle(this.elementRef.nativeElement, "background", "cyan", RendererStyleFlags2.Important)
    this.background = "red"
  }

  @HostListener("mouseleave")
  onMouseLeave() {
    // this.renderer.setStyle(this.elementRef.nativeElement,"background", "none", RendererStyleFlags2.Important)
    this.background = "none";
  }

  /* Important: * Primeiro modo de se resolver o problema */
  // @HostBinding("style.background")
  // background: string = "";

  /* Important: * Segundo modo de se resolver o problema, caso queira fazer alguma coisa quando o evento for disparado ALEM de trocar a cor */
  @HostBinding("style.background")
  get setColor() {
    // Codigo extra se quiser fazer alguma coisa depois de receber Evento MouseOver ou MouseLeave
    return this.background
  }

  private background : string = "";

  constructor(private elementRef: ElementRef, private renderer: Renderer2) { }

}
