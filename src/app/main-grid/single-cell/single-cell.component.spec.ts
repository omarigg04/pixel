import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleCellComponent } from './single-cell.component';

describe('SingleCellComponent', () => {
  let component: SingleCellComponent;
  let fixture: ComponentFixture<SingleCellComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SingleCellComponent]
    });
    fixture = TestBed.createComponent(SingleCellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
