import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { RepairdialogComponent } from './repairdialog/repairdialog.component';
import { TechnicianApplicationComponent } from './technician-application/technician-application.component';


@NgModule({
  declarations: [
    AppComponent,
    RepairdialogComponent,
    TechnicianApplicationComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
