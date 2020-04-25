import { Component, OnInit, AfterViewInit } from '@angular/core';
import * as typeformEmbed from '@typeform/embed';

@Component({
  selector: 'app-survey-employer',
  templateUrl: './survey-employer.component.html',
  styleUrls: ['./survey-employer.component.scss']
})
export class SurveyEmployerComponent implements AfterViewInit {

  constructor() { }

  ngAfterViewInit(): void {
    const embedElement = document.querySelector(".typeform");
    typeformEmbed.makeWidget(
      embedElement,
      'https://davidriandosiagian.typeform.com/to/mZlER5',
      {
        hideHeaders: true,
        hideFooter: true,
        opacity: 75,
        buttonText: "Start survey!"
      }
    )
  }
}
