import { Component, computed, inject } from '@angular/core';
import { SidebarService } from '@core/services/sidebar.service';
import { UserService } from '@core/services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  private sidebarService = inject(SidebarService);
  private readonly userService = inject(UserService);

  isProfileCardOpen = false;

  readonly user = computed(() => {
    return this.userService.user();
  });

  handleProfileIconClick(): void {
    this.isProfileCardOpen = !this.isProfileCardOpen;
  }

  toggleSidebar(): void {
    this.sidebarService.toggleSideBar();
  }
}
