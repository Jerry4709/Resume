import { Component, HostListener } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-project-tradenews',
  standalone: true,
  imports: [RouterModule, CommonModule, TranslateModule],
  templateUrl: './project-tradenews.html',
  styleUrls: ['./project-tradenews.css']
})
export class ProjectTradenewsComponent {
  images = [
    '/img/ea/Setting1.png',
    '/img/ea/Ea.png',
    '/img/ea/Order.png'
  ];

  isPreviewActive = false;
  currentIndex = 0;

  get previewImage() {
    return this.images[this.currentIndex];
  }

  openPreview(index: number, event: Event) {
    event.stopPropagation();
    this.currentIndex = index;
    this.isPreviewActive = true;
  }

  closePreview() {
    this.isPreviewActive = false;
  }

  nextImage(event: Event) {
    event.stopPropagation();
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
  }

  prevImage(event: Event) {
    event.stopPropagation();
    this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
  }

  @HostListener('document:click')
  onDocumentClick() {
    this.closePreview();
  }

  @HostListener('document:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    if (!this.isPreviewActive) return;
    if (event.key === 'ArrowRight') {
      this.currentIndex = (this.currentIndex + 1) % this.images.length;
    } else if (event.key === 'ArrowLeft') {
      this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
    } else if (event.key === 'Escape') {
      this.closePreview();
    }
  }
}
