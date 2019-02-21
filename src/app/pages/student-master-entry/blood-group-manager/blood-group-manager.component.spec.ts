import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {BloodGroupManagerComponent} from './blood-group-manager.component';

describe('BloodGroupManagerComponent', () => {
  let component: BloodGroupManagerComponent;
  let fixture: ComponentFixture<BloodGroupManagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BloodGroupManagerComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BloodGroupManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
