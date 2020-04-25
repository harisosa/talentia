import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { ForEmployerComponent } from './for-employer/for-employer.component';
import { ShowcaseComponent } from './showcase/showcase.component';
import { ForJobseekerComponent } from './for-jobseeker/for-jobseeker.component';
import { TalentBidComponent } from './talent-bid/talent-bid.component';


const routes: Routes = [{
  path: '',
  component: LandingPageComponent
}, {
  path: 'for-employer',
  component: ForEmployerComponent,
}, {
  path: 'for-jobseeker',
  component: ForJobseekerComponent
},
{
  path: 'showcase',
  component: ShowcaseComponent
},
{
  path: 'talent-bid',
  component: TalentBidComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
