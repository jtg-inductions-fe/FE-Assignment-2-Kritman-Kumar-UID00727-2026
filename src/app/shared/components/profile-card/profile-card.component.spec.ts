import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileCartComponent } from './profile-card.component';

describe('ProfileCartComponent', () => {
  let component: ProfileCartComponent;
  let fixture: ComponentFixture<ProfileCartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProfileCartComponent],
    });
    fixture = TestBed.createComponent(ProfileCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
