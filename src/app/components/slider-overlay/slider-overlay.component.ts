import { Component, output } from '@angular/core';

@Component({
  selector: 'app-slider-overlay',
  standalone: true,
  imports: [],
  templateUrl: './slider-overlay.component.html',
  styleUrl: './slider-overlay.component.scss'
})
export class SliderOverlayComponent {
  prevImage = output<Event>()
  nextImage = output<Event>()

  getPrevImage(e: Event) {
    this.prevImage.emit(e)
  }

  getNextImage(e: Event) {
    this.nextImage.emit(e)
  }
}
