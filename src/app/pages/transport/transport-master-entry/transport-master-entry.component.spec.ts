import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransportMasterEntryComponent } from './transport-master-entry.component';

describe('TransportMasterEntryComponent', () => {
  let component: TransportMasterEntryComponent;
  let fixture: ComponentFixture<TransportMasterEntryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransportMasterEntryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransportMasterEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
