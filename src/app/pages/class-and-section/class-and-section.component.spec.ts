import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassAndSectionComponent } from './class-and-section.component';

describe('ClassAndSectionComponent', () => {
  let component: ClassAndSectionComponent;
  let fixture: ComponentFixture<ClassAndSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClassAndSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassAndSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
