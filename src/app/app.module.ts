import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app.routing';

import { provideRoutes, RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { RepairdialogComponent } from './_components/repairdialog/repairdialog.component';
import { TechnicianApplicationComponent } from './_components/technician-application/technician-application.component';
import { LandingscreenComponent } from './_components/landingscreen/landingscreen.component';
import { NavbarComponent } from './_components/navbar/navbar.component';
import { AboutpageComponent } from './_components/aboutpage/aboutpage.component';
import { TheSchedulerComponent } from './_components/the-scheduler/the-scheduler.component';
import { FinancialsComponent } from './_components/financials/financials.component';


@NgModule({
  declarations: [
    AppComponent,
    RepairdialogComponent,
    TechnicianApplicationComponent,
    LandingscreenComponent,
    NavbarComponent,
    AboutpageComponent,
    TheSchedulerComponent,
    FinancialsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
