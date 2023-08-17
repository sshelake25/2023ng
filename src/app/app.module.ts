import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MenuItemComponent } from './menu-item/menu-item.component';
import { MenuListComponent } from './menu-list/menu-list.component';
import { HeaderComponent } from './header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MasterActionComponent } from './master-action/master-action.component';

import { PatientHistoryComponent } from './patient-history/patient-history.component';
import { BirthHistoryComponent } from './birth-history/birth-history.component';
import { AppRoutingModule } from './app-routing.module';
import { NotFoundComponent } from './not-found/not-found.component';
import { AnimalHistoryComponent } from './animal-history/animal-history.component';
import { HomeComponent } from './home/home.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { TestImageDirective } from './test-image.directive';
import { PatientInfoComponent } from './patient-info/patient-info.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ThirdParyModulesModule } from './third-pary-modules/third-pary-modules.module';
import { GridWrapperComponent } from './grid-wrapper/grid-wrapper.component';
import { CapitalizePipe } from './capitalize.pipe';
import { SimpleInterceptor } from './simple.interceptor';

import {GlobalErrorHandar} from './global-error-handar'

@NgModule({
  declarations: [
    AppComponent,
    MenuItemComponent,
    MenuListComponent,
    HeaderComponent,
    MasterActionComponent,
    PatientHistoryComponent,
    BirthHistoryComponent,
    NotFoundComponent,
    AnimalHistoryComponent,
    HomeComponent,
    TestImageDirective,
    PatientInfoComponent,
    GridWrapperComponent,
    CapitalizePipe,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    ThirdParyModulesModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: SimpleInterceptor, multi: true },
    { provide: ErrorHandler, useClass: GlobalErrorHandar },
  ],

  bootstrap: [AppComponent],
})
export class AppModule {}
