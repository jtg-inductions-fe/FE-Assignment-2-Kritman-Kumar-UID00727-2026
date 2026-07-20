import { Component, inject } from '@angular/core';
import { UserService } from '@app/core/services/user.service';
import { AuthUser } from '@app/shared/models/auth.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  private readonly userService = inject(UserService);

  // readonly user = this.userService.getUser();
  isProfileCardOpen = true;

  user: AuthUser = {
    id: 1,
    name: 'Kritman Rao',
    email: 'kr@gmail.com',
    password: 'kritman',
    role: 'admin',
    profileImgUrl: 'assets/profile.png',
  };

  handleProfileIconClick() {
    this.isProfileCardOpen = !this.isProfileCardOpen;
  }
}
