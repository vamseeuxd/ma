import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {FirebaseSingleListComponent} from './firebase-single-list.component';

describe('FirebaseSingleListComponent', () => {
  let component: FirebaseSingleListComponent;
  let fixture: ComponentFixture<FirebaseSingleListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FirebaseSingleListComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirebaseSingleListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
