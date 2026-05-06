import { Component, OnInit, OnDestroy, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';

interface Slide {
  url: string;
  title?: string;
  description?: string;
}

@Component({
  selector: 'app-slider',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit, OnDestroy {
  originalSlides: Slide[] = [
    { url: 'https://res.cloudinary.com/dopjdoa1u/image/upload/v1775629111/new_3_girqfw.png' },
    { url: 'https://res.cloudinary.com/dopjdoa1u/image/upload/v1775629110/new_2_k9ibcl.png' },
    { url: 'https://res.cloudinary.com/dopjdoa1u/image/upload/v1775629110/new_5_nemwqb.png' },
    { url: 'https://res.cloudinary.com/dopjdoa1u/image/upload/v1775629109/new_1_jozrj2.png' },
    { url: 'https://res.cloudinary.com/dopjdoa1u/image/upload/v1775629108/new_4_hwllhx.png' }
  ];

  // Clone first and last images for seamless loop
  extendedSlides = [
    this.originalSlides[this.originalSlides.length - 1],
    ...this.originalSlides,
    this.originalSlides[0]
  ];

  currentSlide = 1; // Start at 1 because 0 is the clone
  isTransitioning = true;
  interval: any;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) { }

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.startAutoPlay();
    }
  }

  ngOnDestroy() {
    this.stopAutoPlay();
  }

  startAutoPlay() {
    this.stopAutoPlay();
    this.interval = setInterval(() => {
      this.nextSlide();
    }, 5000);
  }

  stopAutoPlay() {
    if (this.interval) clearInterval(this.interval);
  }

  nextSlide() {
    this.isTransitioning = true;
    this.currentSlide++;

    // If reached the clone of the FIRST slide
    if (this.currentSlide === this.extendedSlides.length - 1) {
      setTimeout(() => {
        this.isTransitioning = false; // Turn off transition
        this.currentSlide = 1;        // Snap back to real first slide
      }, 600); // Wait for transition to finish
    }

    this.startAutoPlay();
  }

  prevSlide() {
    this.isTransitioning = true;
    this.currentSlide--;

    // If reached the clone of the LAST slide
    if (this.currentSlide === 0) {
      setTimeout(() => {
        this.isTransitioning = false; // Turn off transition
        this.currentSlide = this.extendedSlides.length - 2; // Snap to real last slide
      }, 600);
    }

    this.startAutoPlay();
  }

  goToSlide(index: number) {
    this.isTransitioning = true;
    this.currentSlide = index + 1; // +1 because index 0 is the clone
    this.startAutoPlay();
  }
}
