import {async, ComponentFixture, fakeAsync, TestBed} from '@angular/core/testing';

import { CatalogViewComponent } from './catalog-view.component';
import {ChangeDetectionStrategy, DebugElement, ElementRef} from '@angular/core';
import {By} from '@angular/platform-browser';

describe('CatalogViewComponent', () => {
  let component: CatalogViewComponent;
  let fixture: ComponentFixture<CatalogViewComponent>;
  const catalog = [
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


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CatalogViewComponent ]
    }).overrideComponent(CatalogViewComponent, {
      set: {  changeDetection: ChangeDetectionStrategy.Default  }
    })
        .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CatalogViewComponent);
    component = fixture.componentInstance;
    fixture.autoDetectChanges(true);
    // fixture.detectChanges();
  });

  it('catalog view should display first img element by default', async(() => {
    component.catalog = catalog[0];
    const nativeElement = fixture.nativeElement;
    fixture.detectChanges();
    const image = nativeElement.querySelector('.catalog-image');
    fixture.whenStable().then(res => {
      expect(image).toBeTruthy();
      expect(image.src).toContain(catalog[0].image);
    });
  }));

});
