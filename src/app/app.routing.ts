import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LandingscreenComponent } from './_components/landingscreen/landingscreen.component';
import { RepairdialogComponent } from './_components/repairdialog/repairdialog.component';
import { TechnicianApplicationComponent } from './_components/technician-application/technician-application.component';
import { AboutpageComponent } from './_components/aboutpage/aboutpage.component'; 
// import { PersonsdetailComponent } from './_components/personsdetail/personsdetail.component';
// import { MessagingComponent } from './_components/messaging/messaging.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
   { path: 'home',  component: LandingscreenComponent },
   { path: 'repair', component: RepairdialogComponent},
  // { path: 'persondetail/:id', component: PersonsdetailComponent },
   { path: 'apply',     component: TechnicianApplicationComponent },
   { path: 'about',     component: AboutpageComponent },
  // { path: 'tribedetail/:id',     component: TribedetailComponent },
  // { path: 'messaging',     component: MessagingComponent }
  
  
  
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}