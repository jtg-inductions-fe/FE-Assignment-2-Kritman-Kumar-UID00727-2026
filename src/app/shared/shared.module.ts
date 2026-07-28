import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet, RouterLinkActive } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatMenuModule } from '@angular/material/menu';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTreeModule } from '@angular/material/tree';
import { MatRippleModule } from '@angular/material/core';

import { AvatarComponent } from './components/avatar/avatar.component';
import { HeaderComponent } from './components/header/header.component';
import { LogoComponent } from './components/logo/logo.component';
import { SidebarNavGroupComponent } from './components/sidebar-nav-group/sidebar-nav-group.component';
import { MainLayoutComponent } from './components/main-layout/main-layout.component';
import { SidebarLinksComponent } from './components/sidebar-links/sidebar-links.component';
import { FooterActionsComponent } from './components/footer-actions/footer-icons.component';

@NgModule({
  declarations: [
    HeaderComponent,
    AvatarComponent,
    MainLayoutComponent,
    LogoComponent,
    SidebarNavGroupComponent,
    SidebarLinksComponent,
    FooterActionsComponent,
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatChipsModule,
    MatDividerModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatMenuModule,
    MatSnackBarModule,
    MatTooltipModule,
    MatTreeModule,
    MatSidenavModule,
    ReactiveFormsModule,
    RouterLink,
    RouterLinkActive,
    RouterOutlet,
    MatRippleModule,
    RouterLinkActive,
  ],
  exports: [
    AvatarComponent,
    CommonModule,
    HeaderComponent,
    MatButtonModule,
    MatChipsModule,
    MatDividerModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatMenuModule,
    MatSidenavModule,
    MatSnackBarModule,
    MatTooltipModule,
    ReactiveFormsModule,
  ],
})
export class SharedModule {}
