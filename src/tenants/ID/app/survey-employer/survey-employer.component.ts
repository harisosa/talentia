import { Component, OnInit, AfterViewInit } from '@angular/core';
import * as typeformEmbed from '@typeform/embed';
import { Router } from '@angular/router';

@Component({
  selector: 'app-survey-employer',
  templateUrl: './survey-employer.component.html',
  styleUrls: ['./survey-employer.component.scss']
})
export class SurveyEmployerComponent implements AfterViewInit {

  skip : boolean = false;
  sec :number = 10;
  constructor(private router: Router) { }

  ngAfterViewInit(): void {
    let ctrl = this
    const embedElement = document.querySelector(".typeform");
    typeformEmbed.makeWidget(
      embedElement,
      'https://davidriandosiagian.typeform.com/to/mZlER5',
      {
        hideHeaders: true,
        hideFooter: true,
        opacity: 75,
        buttonText: "Start survey!",
        onSubmit: function () {
          ctrl.ToShowcase()
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
  ToShowcase(){
    this.router.navigate(['/showcase']);
  }


}
