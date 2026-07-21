import { Component } from '@angular/core';
import { SidebarControlIcon } from '@shared/models/sidebar.model';

import { sidebarControlIcons,sidebarLinks } from './sidebar.config';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent {
  readonly sidebarAccountLinks = sidebarLinks.account;
  readonly sidebarNavigationLinks = sidebarLinks.navigation;

  sidebarControlIcons: SidebarControlIcon[] = sidebarControlIcons;
}
