import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SurveyEmployerComponent } from './survey-employer.component';

describe('SurveyEmployerComponent', () => {
  let component: SurveyEmployerComponent;
  let fixture: ComponentFixture<SurveyEmployerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SurveyEmployerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SurveyEmployerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
