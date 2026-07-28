import { Component, OnInit, inject } from '@angular/core';

import { SidebarControlAction, SidebarNavItem } from '@shared/models/sidebar.model';
import { sidebarControlIcons, sidebarLinks } from './sidebar-nav-group.config';
import { UserService } from '@app/core/services/user/user.service';
import { USER_ROLE } from '@app/shared/constants/enum';

@Component({
  selector: 'app-sidebar-nav-group',
  templateUrl: './sidebar-nav-group.component.html',
  styleUrls: ['./sidebar-nav-group.component.scss'],
})
export class SidebarNavGroupComponent implements OnInit {
  private readonly userService = inject(UserService);

  readonly sidebarAccountLinks = sidebarLinks.account;
  sidebarNavigationLinks: SidebarNavItem[] = [];

  ngOnInit(): void {
    if (this.userService.$role() === USER_ROLE.ADMIN) {
      this.sidebarNavigationLinks = sidebarLinks.ownerNavigation;
    } else {
      this.sidebarNavigationLinks = sidebarLinks.ownerNavigation;
    }
  }

  sidebarControlIcons: SidebarControlAction[] = sidebarControlIcons;
}
