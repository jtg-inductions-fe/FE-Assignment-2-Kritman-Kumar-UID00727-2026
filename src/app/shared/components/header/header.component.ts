import { Component, inject } from '@angular/core';
import { SidebarService } from '@app/core/services/sidebar.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  appLogoSrc = 'assets/icons/logo.png';
  profileSrc = 'assets/profile.png';

  private sidebarService = inject(SidebarService);

  handleMenuClick() {
    this.sidebarService.toggleClick$.next();
  }
}
