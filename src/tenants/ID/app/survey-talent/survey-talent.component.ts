import { Component, OnInit, AfterViewInit } from '@angular/core';
import * as typeformEmbed from '@typeform/embed';
import { Router } from '@angular/router';

@Component({
  selector: 'app-survey-talent',
  templateUrl: './survey-talent.component.html',
  styleUrls: ['./survey-talent.component.scss']
})
export class SurveyTalentComponent implements AfterViewInit {

  skip : boolean = false;
  sec :number = 10;
  constructor(private router: Router) { }

  ngAfterViewInit(): void {
    let ctrl = this
    const embedElement = document.querySelector(".typeform");
    typeformEmbed.makeWidget(
      embedElement,
      'https://davidriandosiagian.typeform.com/to/VfbLU9',
      {
        hideHeaders: true,
        hideFooter: true,
        opacity: 75,
        buttonText: "Start survey!",
        onSubmit: function () {
          ctrl.ToTalentBid()
        }
      }
    )

    this.timer()
  }

  timer(){
    let ctrl = this
    var downloadTimer = setInterval(function(){
      if(ctrl.sec <= 1){
        clearInterval(downloadTimer);
        ctrl.skip = true
      } 
      ctrl.sec -= 1;
    }, 1000);
  }
  ToTalentBid(){
    this.router.navigate(['/talent-bid']);
  }

}
