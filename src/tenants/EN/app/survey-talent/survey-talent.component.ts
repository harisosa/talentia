import { Component, OnInit, AfterViewInit } from '@angular/core';
import * as typeformEmbed from '@typeform/embed';

@Component({
  selector: 'app-survey-talent',
  templateUrl: './survey-talent.component.html',
  styleUrls: ['./survey-talent.component.scss']
})
export class SurveyTalentComponent implements AfterViewInit {

  constructor() { }

  ngAfterViewInit(): void {
    const embedElement = document.querySelector(".typeform");
    typeformEmbed.makeWidget(
      embedElement,
      'https://davidriandosiagian.typeform.com/to/VfbLU9',
      {
        hideHeaders: true,
        hideFooter: true,
        opacity: 75,
        buttonText: "Start survey!"
      }
    )
  }
}
