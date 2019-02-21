import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ReasonManagerComponent} from './reason-manager.component';

describe('ReasonManagerComponent', () => {
  let component: ReasonManagerComponent;
  let fixture: ComponentFixture<ReasonManagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ReasonManagerComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReasonManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
