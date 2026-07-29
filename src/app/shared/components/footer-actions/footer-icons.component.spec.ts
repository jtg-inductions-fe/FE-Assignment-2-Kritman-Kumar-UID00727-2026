import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterActionsComponent } from './footer-icons.component';

describe('FooterActionsComponent', () => {
  let component: FooterActionsComponent;
  let fixture: ComponentFixture<FooterActionsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FooterActionsComponent],
    });
    fixture = TestBed.createComponent(FooterActionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
