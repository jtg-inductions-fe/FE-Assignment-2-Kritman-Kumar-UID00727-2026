import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';

import { AvatarComponent } from './components/avatar/avatar.component';
import { ButtonComponent } from './components/button/button.component';
import { HeaderComponent } from './components/header/header.component';
import { LogoComponent } from './components/logo/logo.component';
import { LogoutComponent } from './components/profile-cart/profile-cart.component';
@NgModule({
  declarations: [
    HeaderComponent,
    AvatarComponent,
    LogoComponent,
    AvatarComponent,
    LogoutComponent,
    ButtonComponent,
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatChipsModule,
    MatIconModule,
    MatSidenavModule,
    MatDividerModule,
  ],
  exports: [HeaderComponent, AvatarComponent],
})
export class SharedModule {}
