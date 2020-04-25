import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForEmployerComponent } from './for-employer.component';

describe('ForEmployerComponent', () => {
  let component: ForEmployerComponent;
  let fixture: ComponentFixture<ForEmployerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForEmployerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForEmployerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
