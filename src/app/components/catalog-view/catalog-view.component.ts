import {Component, OnInit, Input, ChangeDetectionStrategy} from '@angular/core';
import { Catalog } from '../catalog/catalog.component';

@Component({
  selector: 'app-catalog-view',
  templateUrl: './catalog-view.component.html',
  styleUrls: ['./catalog-view.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CatalogViewComponent implements OnInit {

  @Input() catalog: Catalog;
  constructor() {}

  ngOnInit() {
  }

}
