import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit {

  catalogSelected: Catalog;
  currentIndex: number;
  slideAtive = false;
  slideDuration = 3000;
  slideTimer = null;
  catalogs: Array<Catalog> = [
    {
      thumb: '/assets/images/thumb/tea-light-thumb.jpeg',
      image: '/assets/images/tea-light.jpeg'
    },
    {
      thumb: '/assets/images/thumb/white-light-thumb.jpeg',
      image: '/assets/images/white-light.jpeg',
    },
    {
      thumb: '/assets/images/thumb/pink-light-thumb.jpeg',
      image: '/assets/images/pink-light.jpeg',
    },
    {
      thumb: '/assets/images/thumb/tea-light-thumb.jpeg',
      image: '/assets/images/tea-light.jpeg',
    }
  ];

  constructor() { }

  ngOnInit() {
    this.nextClick();
  }

  selectedCatalog(index: number) {
    this.currentIndex = index;
    this.catalogSelected = this.catalogs[index];
    this.resetSlideTimer();
  }

  previousClick() {
    this.currentIndex = (this.currentIndex > 0) ? this.currentIndex -= 1 : this.currentIndex = this.catalogs.length - 1;
    this.selectedCatalog(this.currentIndex);
  }

  nextClick() {
    this.currentIndex = (this.currentIndex < this.catalogs.length - 1) ? this.currentIndex += 1 : this.currentIndex = 0;
    this.selectedCatalog(this.currentIndex);
  }

  slideChange(checked) {
    if (checked && !this.slideTimer) {
      this.slideTimer = setInterval(() => {
        this.onSlideChange();
      }, this.slideDuration);
    }
  }

  resetSlideTimer() {
    if (this.slideAtive) {
      this.clearSlideTimer();
      this.slideChange(this.slideAtive);
    }
  }

  onSlideChange = function() {
    this.nextClick();
    if (!this.slideAtive) {
      this.clearSlideTimer();
    }
  }

  clearSlideTimer() {
    clearInterval(this.slideTimer);
    this.slideTimer = null;
  }
}


export class Catalog {
  thumb: string;
  image: string;
}
