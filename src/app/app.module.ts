import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { CatalogComponent } from './components/catalog/catalog.component';
import { CatalogItemsComponent } from './components/catalog-items/catalog-items.component';
import { CatalogItemComponent } from './components/catalog-item/catalog-item.component';
import { CatalogViewComponent } from './components/catalog-view/catalog-view.component';

@NgModule({
  declarations: [
    AppComponent,
    CatalogComponent,
    CatalogItemsComponent,
    CatalogItemComponent,
    CatalogViewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
