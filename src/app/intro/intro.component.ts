import { Component } from '@angular/core';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.css']
})
export class IntroComponent {

}
// fade-in.directive.ts
import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appFadeIn]'
})
export class FadeInDirective {
  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollPosition = window.scrollY + window.innerHeight;
    const elementPosition = this.el.nativeElement.offsetTop;

    if (elementPosition < scrollPosition) {
      this.renderer.addClass(this.el.nativeElement, 'fade-in');
    }
  }
}
