import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ItemTypeComponent } from './item-type/item-type.component';
import { ItemTypeListComponent } from './item-type-list/item-type-list.component';
import { ItemComponent } from './item/item.component';
import { ItemListComponent } from './item-list/item-list.component';
import { ItemDetailComponent } from './item-detail/item-detail.component';
import { StorageService } from './storage.service';

@NgModule({
  declarations: [
    AppComponent,
    ItemTypeComponent,
    ItemTypeListComponent,
    ItemComponent,
    ItemListComponent,
    ItemDetailComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    StorageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
