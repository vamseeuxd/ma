import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaDynamicFormComponent } from './ma-dynamic-form.component';

describe('MaDynamicFormComponent', () => {
  let component: MaDynamicFormComponent;
  let fixture: ComponentFixture<MaDynamicFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaDynamicFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaDynamicFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
