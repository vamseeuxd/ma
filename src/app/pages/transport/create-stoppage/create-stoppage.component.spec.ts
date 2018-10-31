import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateStoppageComponent } from './create-stoppage.component';

describe('CreateStoppageComponent', () => {
  let component: CreateStoppageComponent;
  let fixture: ComponentFixture<CreateStoppageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateStoppageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateStoppageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
