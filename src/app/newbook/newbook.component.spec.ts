import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewbookComponent } from './newbook.component';

describe('NewbookComponent', () => {
  let component: NewbookComponent;
  let fixture: ComponentFixture<NewbookComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewbookComponent]
    });
    fixture = TestBed.createComponent(NewbookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});