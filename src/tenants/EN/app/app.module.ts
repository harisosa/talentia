import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { SharedComponentModule } from '../../../shared/component/shared-component.module';
import { ForEmployerComponent } from './for-employer/for-employer.component';
import { ShowcaseComponent } from './showcase/showcase.component';
import { ForJobseekerComponent } from './for-jobseeker/for-jobseeker.component';
import { TalentBidComponent } from './talent-bid/talent-bid.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    ForEmployerComponent,
    ShowcaseComponent,
    ForJobseekerComponent,
    TalentBidComponent    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedComponentModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
