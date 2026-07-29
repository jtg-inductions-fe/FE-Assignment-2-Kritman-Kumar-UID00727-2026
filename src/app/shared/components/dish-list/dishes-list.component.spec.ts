import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DishesListComponent } from './dishes-list.component';

describe('DishesListComponent', () => {
  let component: DishesListComponent;
  let fixture: ComponentFixture<DishesListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DishesListComponent],
    });
    fixture = TestBed.createComponent(DishesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
