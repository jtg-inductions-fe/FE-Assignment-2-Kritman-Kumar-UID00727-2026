import { Component, Input } from '@angular/core';
import { AuthUser } from '@app/shared/models/auth.model';

@Component({
  selector: 'app-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.scss'],
})
export class AvatarComponent {
  @Input() user: AuthUser | null = null;
  userProfileUrl = 'assets/profile.png';
  userImageAlt = this.user?.name + 'profile image';
}
