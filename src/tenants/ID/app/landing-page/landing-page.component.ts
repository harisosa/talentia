import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

  constructor(private router: Router ) { }

  ngOnInit(): void {
  }

  ToEmployer(){
    this.router.navigate(['/for-employer']);
  }
  ToJobSeeker(){
    this.router.navigate(['/for-jobseeker']);
  }
  ToTalentSurvey(){
    this.router.navigate(['/talent-survey']);
    
  }
  
  ToEmployerSurvey(){
    this.router.navigate(['/employer-survey']);
  }
}
