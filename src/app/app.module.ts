import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MenuItemComponent } from './menu-item/menu-item.component';
import { MenuListComponent } from './menu-list/menu-list.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuItemComponent,
    MenuListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
