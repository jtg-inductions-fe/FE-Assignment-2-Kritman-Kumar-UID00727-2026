import { Component, computed, EventEmitter, inject, Output } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@core/services/auth.service';
import { UserService } from '@core/services/user.service';
import { APP_ROUTES } from '@shared/constants/routes.constants';

import { PROFILE_CART_UI } from './profile-card.constant';

@Component({
  selector: 'app-profile-cart',
  templateUrl: './profile-card.component.html',
  styleUrls: ['./profile-card.component.scss'],
})
export class ProfileCartComponent {
  private readonly authService = inject(AuthService);
  private readonly userService = inject(UserService);
  private readonly router = inject(Router);

  readonly user = computed(() => this.userService.user());

  @Output() closeProfileCart = new EventEmitter<void>();

  profileCardUI = PROFILE_CART_UI;

  logOutRequested() {
    this.authService.logout();
    this.router.navigate([APP_ROUTES.LOGIN]);
    this.closeProfileCart.emit();
  }
}
