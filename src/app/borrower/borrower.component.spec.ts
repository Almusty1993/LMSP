import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BorrowerComponent } from './borrower.component';

describe('BorrowerComponent', () => {
  let component: BorrowerComponent;
  let fixture: ComponentFixture<BorrowerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BorrowerComponent]
    });
    fixture = TestBed.createComponent(BorrowerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
