import {AfterViewInit, Directive, ElementRef, EventEmitter, Output} from '@angular/core';
import {ScrollService} from './../service/scroll.service';

@Directive({
  selector: '[appScrollSpy]',
  standalone: true
})
export class ScrollSpyDirective implements AfterViewInit {
  @Output() public sectionChange = new EventEmitter<string>();

  constructor(private el: ElementRef, private scrollService: ScrollService) {
  }

  ngAfterViewInit() {
    window.addEventListener('scroll', this.scrollHandler);
  }

  private scrollHandler = () => {
    const box = this.el.nativeElement.getBoundingClientRect();
    if (box.top <= window.innerHeight * 0.5 && box.bottom >= window.innerHeight * 0.5) {
      const sectionId = this.el.nativeElement.id;
      this.scrollService.setCurrentSection(sectionId);
    }
  };

}
