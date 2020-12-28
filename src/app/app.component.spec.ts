/* tslint:disable:no-unused-variable */

import {TestBed, async, ComponentFixture} from '@angular/core/testing';
import { AppComponent } from './app.component';
import { AppModule } from './app.module';
import {By} from '@angular/platform-browser';
import {DebugElement} from '@angular/core';
import {CatalogComponent} from './components/catalog/catalog.component';
import {CatalogItemsComponent} from './components/catalog-items/catalog-items.component';
import {CatalogViewComponent} from './components/catalog-view/catalog-view.component';
import {CatalogItemComponent} from './components/catalog-item/catalog-item.component';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  const catalog = [
    {
      thumb: '/assets/images/thumb/mobile-front-thumb.jpeg',
      image: '/assets/images/mobile-front.jpeg'
    },
    {
      thumb: '/assets/images/thumb/mobile-back-thumb.jpeg',
      image: '/assets/images/mobile-back.jpeg',
    },
    {
      thumb: '/assets/images/thumb/mobile-details-thumb.jpeg',
      image: '/assets/images/mobile-details.jpeg',
    },
    {
      thumb: '/assets/images/thumb/mobile-flat-view-thumb.jpeg',
      image: '/assets/images/mobile-flat-view.jpeg',
    }
  ];

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
          AppComponent, CatalogComponent, CatalogItemsComponent, CatalogViewComponent, CatalogItemComponent
      ],
      imports: []
    });
    TestBed.compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.autoDetectChanges(true);
    fixture.detectChanges();
  });

  it('should create the catalog-viewer app', async(() => {
    const nativeElement = fixture.nativeElement;
    const thumb = nativeElement.querySelectorAll('.catalog.item');
    const app = fixture.debugElement.componentInstance;
    expect(thumb.length).toBe(catalog.length);
    expect(app).toBeTruthy();
  }));

  it('page should contain the catalog UI elements', async(() => {
    const nativeElement = fixture.nativeElement;
    const header: DebugElement = fixture.debugElement.query(By.css('app-catalog'));
    const thumb = nativeElement.querySelectorAll('.catalog.item');
    fixture.detectChanges();
    expect(header.nativeElement.innerHTML).toContain('app-catalog-items');
    expect(thumb.length).toBe(catalog.length);
  }));

});
