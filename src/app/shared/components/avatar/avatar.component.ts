import { Component, Input, OnInit } from '@angular/core';
import { AuthUser } from '@shared/models/auth.model';

@Component({
  selector: 'app-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.scss'],
})
export class AvatarComponent implements OnInit {
  @Input() user: AuthUser | null = null;

  profileImgUrl = '';
  userImageAlt = '';

  ngOnInit(): void {
    this.profileImgUrl = this.user?.profileImgUrl || '';
    this.userImageAlt = this.user?.name || '' + 'profile image';
  }
}
