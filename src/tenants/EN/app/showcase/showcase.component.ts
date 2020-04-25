import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-showcase',
  templateUrl: './showcase.component.html',
  styleUrls: ['./showcase.component.scss']
})
export class ShowcaseComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  
  ToEmployerSurvey(e) {
    e.preventDefault();
    this.router.navigate(['/employer-survey']);
  }

}
