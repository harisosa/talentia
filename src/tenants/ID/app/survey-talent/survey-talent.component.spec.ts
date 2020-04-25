import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SurveyTalentComponent } from './survey-talent.component';

describe('SurveyTalentComponent', () => {
  let component: SurveyTalentComponent;
  let fixture: ComponentFixture<SurveyTalentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SurveyTalentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SurveyTalentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
