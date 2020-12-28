import {async, ComponentFixture, fakeAsync, TestBed, tick} from '@angular/core/testing';

import { CatalogItemsComponent } from './catalog-items.component';
import {CatalogItemComponent} from '../catalog-item/catalog-item.component';

describe('CatalogItemsComponent', () => {
  let component: CatalogItemsComponent;
  let fixture: ComponentFixture<CatalogItemsComponent>;
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
      declarations: [ CatalogItemsComponent, CatalogItemComponent ]
    })
        .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CatalogItemsComponent);
    component = fixture.componentInstance;
    fixture.autoDetectChanges(true);
    // fixture.detectChanges();
  });

  it('click/hover on catalog thumb should update the viewer image', fakeAsync(() => {
    component.items = [catalog[0]];
    spyOn(component, 'onImageSelect');
    const nativeElement = fixture.nativeElement;
    fixture.detectChanges();
    const thumb = nativeElement.querySelectorAll('.catalog.item');
    thumb[0].click();
    fixture.whenStable().then(res => {
      expect(component.onImageSelect).toHaveBeenCalled();
      expect(component.onImageSelect).toHaveBeenCalledWith(catalog[0], 0);
    });
  }));
    
  it('the first catalog thumb should have a background image "/assets/images/thumb/mobile-front-thumb.jpeg"', async(() => {
    component.items = [...catalog];
    component.currentIndex = 0;
    fixture.detectChanges();
    const nativeElement = fixture.nativeElement;
    const thumb = nativeElement.querySelectorAll('.catalog.item');
    expect(thumb[0].className).toContain('thumb-select');
  }));

  it('selected thumb should be highlighted with blue border by applying css class "thumb-select', fakeAsync(() => {
    component.items = [...catalog];
    component.currentIndex = 0;
    fixture.detectChanges();
    const nativeElement = fixture.nativeElement;
    const thumb = nativeElement.querySelectorAll('.catalog.item');
    expect(thumb[0].className).toContain('thumb-select');
    thumb[2].click();
    fixture.whenStable().then( res => {
      expect(thumb[0].className).not.toContain('thumb-select');
      expect(thumb[2].className).toContain('thumb-select');
    });
  }));

});
