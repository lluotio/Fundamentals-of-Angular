import { Directive, OnInit, Input, Renderer2, ElementRef } from '@angular/core';

@Directive({
  selector: '[appFontSize]',
  standalone: true
})

export class FontSize implements OnInit {

  @Input('appFontSize') size!: string;


  constructor(
    private element: ElementRef,
    private renderer: Renderer2
  ) { }

  ngOnInit() {
    this.renderer.setStyle(
      this.element.nativeElement,
      'font-size',
      this.size
    )
  }
}
