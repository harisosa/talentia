import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TalentBidComponent } from './talent-bid.component';

describe('TalentBidComponent', () => {
  let component: TalentBidComponent;
  let fixture: ComponentFixture<TalentBidComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TalentBidComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TalentBidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
