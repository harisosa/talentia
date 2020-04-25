import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-talent-bid',
  templateUrl: './talent-bid.component.html',
  styleUrls: ['./talent-bid.component.scss']
})
export class TalentBidComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  ToTalentSurvey(e) {
    e.preventDefault();
    this.router.navigate(['/talent-survey']);
  }
}
