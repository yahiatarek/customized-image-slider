import { DOCUMENT, NgOptimizedImage } from '@angular/common';
import { Component, Inject, input, OnInit, signal } from '@angular/core';
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

  $imageElements = signal<NodeListOf<HTMLElement> | null>(null)
  $currentImageElement = signal<HTMLElement>((this.$imageElements() as NodeListOf<HTMLElement>)?.item(0))

  private options = {
    root: this.$currentImageElement(),
    rootMargin: "0px",
    threshold: 1.0,
  };

  observer = new IntersectionObserver((item) => {
    console.log(item, 'item')
  }, this.options);

  ngOnInit(): void {
    this.$imageElements.set(this.document.querySelectorAll('.item-picture') as NodeListOf<HTMLElement>);
  }

  $items = input.required<string[]>();

  protected imageTranslation = signal('0')

  protected getSrc(item: string, breakpoint: number): string {
    return item.replace(/_bp\d{1,4}\.webp/, `_bp${breakpoint}.webp`);
  }

  prevImage(e: Event) {
    this.imageTranslation.set(`100%`);
    this.updateImageTranslation();
  }

  nextImage(e: Event) {
    this.imageTranslation.set(`-100%`);
    this.updateImageTranslation();
  }

  private updateImageTranslation() {
    this.$currentImageElement()?.style.setProperty('--imageTranslation', this.imageTranslation());
  }
}
