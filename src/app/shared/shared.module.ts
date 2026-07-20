import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTreeModule } from '@angular/material/tree';
import { RouterOutlet } from '@angular/router';

import { AvatarComponent } from './components/avatar/avatar.component';
import { ButtonComponent } from './components/button/button.component';
import { HeaderComponent } from './components/header/header.component';
import { LogoComponent } from './components/logo/logo.component';
import { MainLayoutComponent } from './components/main-layout/main-layout.component';
import { ProfileCartComponent } from './components/profile-card/profile-card.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';

@NgModule({
  declarations: [
    HeaderComponent,
    AvatarComponent,
    LogoComponent,
    ProfileCartComponent,
    ButtonComponent,
    MainLayoutComponent,
    SidebarComponent,
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatChipsModule,
    MatIconModule,
    MatSidenavModule,
    MatDividerModule,
    RouterOutlet,
    MatTreeModule,
  ],
  exports: [HeaderComponent, AvatarComponent],
})
export class SharedModule {}
