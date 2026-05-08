import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-project-eprocurement',
  standalone: true,
  imports: [RouterModule, CommonModule, TranslateModule],
  templateUrl: './project-eprocurement.html',
  styleUrls: ['./project-eprocurement.css']
})

export class ProjectEprocurementComponent {
  images = [
    '/img/eprocurement/E-ProcurementSystem.png',
    '/img/eprocurement/1.jpeg',
    '/img/eprocurement/2.jpeg',
  ];
  isPreviewActive = false;
  currentIndex = 0;
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
  get previewImage() {
    return this.images[this.currentIndex];
  }
}

