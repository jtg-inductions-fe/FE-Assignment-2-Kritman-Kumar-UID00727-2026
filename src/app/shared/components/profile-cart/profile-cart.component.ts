import { Component, EventEmitter, inject, Output } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@app/core/services/auth.service';
import { APP_ROUTES } from '@app/shared/constants/routes.constants';
import { AuthUser } from '@app/shared/models/auth.model';

import { logoutUi } from './profile-cart.constant';

@Component({
  selector: 'app-profile-cart',
  templateUrl: './profile-cart.component.html',
  styleUrls: ['./profile-cart.component.scss'],
})
export class LogoutComponent {
  private readonly authService = inject(AuthService);
  private readonly router = inject(Router);

  @Output() handleProfileIconClick = new EventEmitter<void>();

  logoutUi = logoutUi;

  user: AuthUser = {
    id: 1,
    name: 'Kritman Rao',
    email: 'kr@gmail.com',
    password: 'kritman',
    role: 'admin',
    profileImgUrl: 'assets/profile.png',
  };

  logOutRequested() {
    this.authService.logout();
    this.router.navigate([APP_ROUTES.LOGIN]);
    this.handleProfileIconClick.emit();
  }
}
