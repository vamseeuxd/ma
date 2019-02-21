import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {CasteManagerComponent} from './caste-manager.component';

describe('CasteManagerComponent', () => {
  let component: CasteManagerComponent;
  let fixture: ComponentFixture<CasteManagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CasteManagerComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CasteManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
