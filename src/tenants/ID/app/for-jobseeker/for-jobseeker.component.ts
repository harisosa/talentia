import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-for-jobseeker',
  templateUrl: './for-jobseeker.component.html',
  styleUrls: ['./for-jobseeker.component.scss']
})
export class ForJobseekerComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  
  ToTalentBid(){
    this.router.navigate(['/talent-bid']);
  }
}
