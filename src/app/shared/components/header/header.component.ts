import { Component, inject } from '@angular/core';

import { AuthService } from '@core/services/auth/auth.service';
import { UserService } from '@core/services/user/user.service';
import { SidebarService } from '@core/services/sidebar/sidebar.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  private readonly userService = inject(UserService);
  private readonly authService = inject(AuthService);
  private readonly sidebarService = inject(SidebarService);

  readonly $isUserLoggedIn = this.userService.$isLoggedIn;
  readonly $user = this.userService.$user;

  toggleSidebar() {
    this.sidebarService.toggleSideBar();
  }

  handleLogout() {
    this.authService.logout();
  }
}
