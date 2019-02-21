import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {GenderManagerComponent} from './gender-manager.component';

describe('GenderManagerComponent', () => {
  let component: GenderManagerComponent;
  let fixture: ComponentFixture<GenderManagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [GenderManagerComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenderManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
