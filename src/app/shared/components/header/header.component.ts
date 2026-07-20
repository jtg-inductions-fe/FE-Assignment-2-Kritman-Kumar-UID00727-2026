import { Component, computed, inject } from '@angular/core';
import { UserService } from '@core/services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  private readonly userService = inject(UserService);

  readonly user = computed(() => {
    return this.userService.user();
  });

  isProfileCardOpen = false;

  handleProfileIconClick() {
    this.isProfileCardOpen = !this.isProfileCardOpen;
  }
}
