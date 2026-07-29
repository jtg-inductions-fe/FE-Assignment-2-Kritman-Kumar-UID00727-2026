import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarNavGroupComponent } from './sidebar-nav-group.component';

describe('SidebarComponent', () => {
  let component: SidebarNavGroupComponent;
  let fixture: ComponentFixture<SidebarNavGroupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SidebarNavGroupComponent],
    });
    fixture = TestBed.createComponent(SidebarNavGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
