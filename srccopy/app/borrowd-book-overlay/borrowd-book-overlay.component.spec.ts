import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BorrowdBookOverlayComponent } from './borrowd-book-overlay.component';

describe('BorrowdBookOverlayComponent', () => {
  let component: BorrowdBookOverlayComponent;
  let fixture: ComponentFixture<BorrowdBookOverlayComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BorrowdBookOverlayComponent]
    });
    fixture = TestBed.createComponent(BorrowdBookOverlayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
