import {async, ComponentFixture, fakeAsync, flush, TestBed, tick} from '@angular/core/testing';

import {CatalogComponent} from './catalog.component';
import {CatalogItemsComponent} from '../catalog-items/catalog-items.component';
import {CatalogViewComponent} from '../catalog-view/catalog-view.component';
import {CatalogItemComponent} from '../catalog-item/catalog-item.component';

describe('CatalogComponent', () => {
  let component: CatalogComponent;
  let fixture: ComponentFixture<CatalogComponent>;
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
      declarations: [ CatalogComponent, CatalogItemsComponent, CatalogViewComponent, CatalogItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CatalogComponent);
    component = fixture.componentInstance;
    jasmine.clock().install();
    fixture.detectChanges();
  });

  afterEach(() => {
    jasmine.clock().uninstall();
  });

  it('should catalog-view load with first item of catalog', () => {
    component.catalogs = catalog;
    fixture.detectChanges();
    expect(component.catalogSelected.image).toContain(catalog[0].image);
  });
    
  it('catalog thumb icons length should be equal to catalog items length', fakeAsync(() => {
    component.catalogs = catalog;
    fixture.detectChanges();
    tick(5000);
    const nativeElement = fixture.nativeElement;
    const thumb = nativeElement.querySelectorAll('.catalog.item');
    expect(thumb.length).toBe(catalog.length);
  }));


  it('Clicking on previous button should show the previous image', fakeAsync( () => {
    component.catalogs = catalog;
    component.currentIndex = 3;
    const nativeElement = fixture.nativeElement;
    fixture.detectChanges();
    const prev = nativeElement.querySelector('.previous');
    prev.click();
    fixture.whenStable().then(res => {
      expect(component.catalogSelected.image).toContain(catalog[2].image);
    });
  }));

  it('Clicking on next button should show the next image', fakeAsync( () => {
    component.catalogs = catalog;
    const nativeElement = fixture.nativeElement;
    fixture.detectChanges();
    const next = nativeElement.querySelector('.next');
    next.click();
    fixture.whenStable().then(res => {
      expect(component.catalogSelected.image).toContain(catalog[1].image);
    });
  }));

  it('Clicking on next button in the last item should show the first image', fakeAsync( () => {
    component.catalogs = catalog;
    const nativeElement = fixture.nativeElement;
    fixture.detectChanges();
    const next = nativeElement.querySelector('.next');
    next.click();
    next.click();
    next.click();
    next.click();
    fixture.whenStable().then(res => {
      expect(component.catalogSelected.image).toContain(catalog[0].image);
    });
  }));

  it('Clicking on previous button in the first item should show the last image', fakeAsync( () => {
    component.catalogs = catalog;
    const nativeElement = fixture.nativeElement;
    fixture.detectChanges();
    const prev = nativeElement.querySelector('.previous');
    prev.click();
    fixture.whenStable().then(res => {
      expect(component.catalogSelected.image).toContain(catalog[catalog.length - 1].image);
    });
  }));

  it('Clicking on any indicator icon should show the appropriate image', fakeAsync( () => {
    component.catalogs = catalog;
    const nativeElement = fixture.nativeElement;
    fixture.detectChanges();
    const thumb = nativeElement.querySelectorAll('.catalog.item');
    thumb[2].click();
    fixture.whenStable().then(res => {
      expect(component.catalogSelected.image).toContain(catalog[2].image);
    });
  }));
    
     it('when slide enabled should change the image for every 3 seconds', fakeAsync( () => {
    component.catalogs = catalog;
    const nativeElement = fixture.nativeElement;
    spyOn(component, 'slideChange');
    spyOn(component, 'resetSlideTimer');
    const slide = nativeElement.querySelector('#slide');
    slide.click();
    component.resetSlideTimer();
    fixture.detectChanges();
    expect(component.slideChange).toHaveBeenCalled();
    expect(component.resetSlideTimer).toHaveBeenCalled();
    setTimeout(() => {
      expect(component.catalogSelected.image).toContain(catalog[2].image);
    }, 6001);
  }));

  it('when slide enabled also user interaction like previous, next or indecator should work as expected', async function() {
    component.catalogs = catalog;
    const nativeElement = fixture.nativeElement;
    spyOn(component, 'slideChange');
    spyOn(component, 'resetSlideTimer');
    const slide = nativeElement.querySelector('#slide');
    slide.click();
    component.resetSlideTimer();
    fixture.detectChanges();
    expect(component.slideChange).toHaveBeenCalled();
    expect(component.resetSlideTimer).toHaveBeenCalled();
    const next = nativeElement.querySelector('.next');
    next.click();
    setTimeout(() => {
      expect(component.catalogSelected.image).toContain(catalog[3].image);
    }, 6001);
  });

  it('uncheck slide should stop changing the image for every 3 seconds', async function() {
    component.catalogs = catalog;
    const nativeElement = fixture.nativeElement;
    spyOn(component, 'slideChange');
    spyOn(component, 'resetSlideTimer');
    const slide = nativeElement.querySelector('#slide');
    slide.click();
    slide.click();
    component.resetSlideTimer();
    fixture.detectChanges();
    expect(component.slideChange).toHaveBeenCalled();
    expect(component.resetSlideTimer).toHaveBeenCalled();
    setTimeout(() => {
      expect(component.catalogSelected.image).toContain(catalog[0].image);
    }, 6001);
  });
    
});
