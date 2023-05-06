import { Directive, ElementRef, Renderer2, HostListener } from '@angular/core'

@Directive({
  selector: '[appChangeColor]',
  standalone: true
})
export class ChangeColorDirective {
  yellowgreen = false

  constructor(
    private elementRef: ElementRef<HTMLElement>,
    private renderer2: Renderer2
  ) {}

  @HostListener('click')
  handleClick(): void {
    this.renderer2.setStyle(
      this.elementRef.nativeElement,
      'background-color',
      this.yellowgreen ? 'orange' : 'yellowgreen'
    )
    this.yellowgreen = !this.yellowgreen
  }
}
