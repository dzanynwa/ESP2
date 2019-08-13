import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MerchantsTableComponent } from './merchants-table.component';

describe('MerchantsTableComponent', () => {
  let component: MerchantsTableComponent;
  let fixture: ComponentFixture<MerchantsTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MerchantsTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MerchantsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
