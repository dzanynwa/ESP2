import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PosSystemsComponent } from './pos-systems.component';

describe('PosSystemsComponent', () => {
  let component: PosSystemsComponent;
  let fixture: ComponentFixture<PosSystemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PosSystemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PosSystemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
