import { Directive, ElementRef, Renderer2, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appChangeColor]',
  standalone: true
})
export class ChangeColor implements OnInit {

  @Input('appChangeColor') color!: string;

  constructor(
    private element: ElementRef,
    private renderer: Renderer2
  ) {}

  ngOnInit() {
    this.renderer.setStyle(
      this.element.nativeElement,
      'color',
      this.color
    );
  }
}