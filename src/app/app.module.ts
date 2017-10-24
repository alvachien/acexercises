import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Routes, RouterModule } from '@angular/router';
import { UIDependModule } from './uidepend.module';

import { AppComponent } from './app.component';
import { ItemTypeComponent } from './item-type/item-type.component';
import { ItemTypeListComponent } from './item-type-list/item-type-list.component';
import { ItemComponent } from './item/item.component';
import { ItemListComponent } from './item-list/item-list.component';
import { ItemDetailComponent } from './item-detail/item-detail.component';
import { StorageService } from './storage.service';
import { HomePageComponent } from './home-page/home-page.component';

export const AppRoutes: Routes = [
  {
      path: '',
      redirectTo: '/home',
      pathMatch: 'full',
  },
  { path: 'home', component: HomePageComponent },
  { 
    path: 'itemtype', 
    component: ItemTypeComponent,
    children: [
      {
        path: '',
        component: ItemTypeListComponent
      }
    ]
  },
  {
    path: 'item',
    component: ItemComponent,
    children: [
      {
        path: '',
        component: ItemListComponent
      }, 
      {
        path: 'create',
        component: ItemDetailComponent
      }, 
      {
        path: 'display/:id',
        component: ItemDetailComponent
      }, 
      {
        path: 'edit/:id',
        component: ItemDetailComponent
      }
    ]
  }
];

@NgModule({
  declarations: [
    AppComponent,
    ItemTypeComponent,
    ItemTypeListComponent,
    ItemComponent,
    ItemListComponent,
    ItemDetailComponent,
    HomePageComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    RouterModule.forRoot(AppRoutes),
    ReactiveFormsModule,
    HttpClientModule,
    UIDependModule
  ],
  providers: [
    StorageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
