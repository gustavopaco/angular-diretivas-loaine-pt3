import {Directive, ElementRef, Renderer2, RendererStyleFlags2} from '@angular/core';

@Directive({
  /* Note: Se quiser utilizar a Diretiva para um tipo de componente especifico, basta coloca o tipo dele antes do [], exemplo p[], button[], h1[]*/
  selector: '[fundoAmarelo]'
})
export class FundoAmareloDirective {

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {
    /* Important: se utilizar ElementRef diretamente para modificar um atributo do DOM, pode abrir brecha para ataque XXS
    *   CrossOrigin! Evitar fazer isso.*/
    // this.elementRef.nativeElement.style.background = "yellow";

    /* IMPORTANT:  Devemos utilizar o Renderer + ElementRef para evitar a pratica acima. */
    this.renderer.setStyle(this.elementRef.nativeElement, "background", "yellow", RendererStyleFlags2.Important)
  }

}
