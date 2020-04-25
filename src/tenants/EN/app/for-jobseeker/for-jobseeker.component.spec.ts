import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForJobseekerComponent } from './for-jobseeker.component';

describe('ForJobseekerComponent', () => {
  let component: ForJobseekerComponent;
  let fixture: ComponentFixture<ForJobseekerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForJobseekerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForJobseekerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
