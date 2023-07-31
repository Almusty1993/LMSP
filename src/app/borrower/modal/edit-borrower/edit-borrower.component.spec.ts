import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditBorrowerComponent } from './edit-borrower.component';

describe('EditBorrowerComponent', () => {
  let component: EditBorrowerComponent;
  let fixture: ComponentFixture<EditBorrowerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditBorrowerComponent]
    });
    fixture = TestBed.createComponent(EditBorrowerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
