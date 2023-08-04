import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BorrowedBookOverlayComponent } from './borrowed-book-overlay.component';

describe('BorrowedBookOverlayComponent', () => {
  let component: BorrowedBookOverlayComponent;
  let fixture: ComponentFixture<BorrowedBookOverlayComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BorrowedBookOverlayComponent]
    });
    fixture = TestBed.createComponent(BorrowedBookOverlayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
