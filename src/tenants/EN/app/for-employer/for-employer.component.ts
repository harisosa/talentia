import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-for-employer',
  templateUrl: './for-employer.component.html',
  styleUrls: ['./for-employer.component.scss']
})
export class ForEmployerComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  ToShowcase(){
    this.router.navigate(['/showcase']);
  }
  ToSurvey(){
    this.router.navigate(['/employer-survey']);
  }
  
}
