import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentMasterEntryComponent } from './student-master-entry.component';

describe('StudentMasterEntryComponent', () => {
  let component: StudentMasterEntryComponent;
  let fixture: ComponentFixture<StudentMasterEntryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentMasterEntryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentMasterEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
