import { DOCUMENT, NgOptimizedImage } from '@angular/common';
import { Component, Inject, InjectionToken, input, OnInit, Signal, signal } from '@angular/core';
import { SliderOverlayComponent } from '../slider-overlay/slider-overlay.component';

@Component({
  selector: 'app-image-slider',
  standalone: true,
  imports: [NgOptimizedImage, SliderOverlayComponent],
  templateUrl: './image-slider.component.html',
  styleUrl: './image-slider.component.scss'
})
export class ImageSliderComponent implements OnInit {
  constructor(@Inject(DOCUMENT) private document: Document) { }

  $imageElement = signal<NodeListOf<HTMLElement> | null>(null)

  ngOnInit(): void {
    this.$imageElement.set(this.document.querySelectorAll('.item-picture') as NodeListOf<HTMLElement>);
  }

  $items = input.required<string[]>();

  protected imageTranslation = signal('0')



  protected getSrc(item: string, breakpoint: number): string {
    return item.replace(/_bp\d{1,4}\.webp/, `_bp${breakpoint}.webp`);
  }

  prevImage(e: Event) {
    this.imageTranslation.set(`${(this.$imageElement() as NodeListOf<HTMLElement>)[0].clientWidth}px`);
    this.updateImageTranslation();
  }

  nextImage(e: Event) {
    this.imageTranslation.set(`-${(this.$imageElement() as NodeListOf<HTMLElement>)[0].clientWidth}px`);
    this.updateImageTranslation();
  }

  private updateImageTranslation() {
    this.$imageElement()?.forEach((image) => {
      image.style.setProperty('--imageTranslation', this.imageTranslation());
    })
  }
}
