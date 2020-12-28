import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CatalogItemComponent } from './catalog-item.component';
import {ChangeDetectionStrategy, DebugElement} from '@angular/core';
import {By} from '@angular/platform-browser';
import {CatalogViewComponent} from '../catalog-view/catalog-view.component';

describe('CatalogItemComponent', () => {
  let component: CatalogItemComponent;
  let fixture: ComponentFixture<CatalogItemComponent>;
  const catalog = [

  ];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CatalogItemComponent ]
    }).overrideComponent(CatalogViewComponent, {
      set: {  changeDetection: ChangeDetectionStrategy.Default  }
    })
        .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CatalogItemComponent);
    component = fixture.componentInstance;
    fixture.autoDetectChanges(true);
    // fixture.detectChanges();
  });

  

});
