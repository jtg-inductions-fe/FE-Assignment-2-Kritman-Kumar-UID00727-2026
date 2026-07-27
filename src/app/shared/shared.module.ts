import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { MatRippleModule } from '@angular/material/core';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTableModule } from '@angular/material/table';
import { MatMenuModule } from '@angular/material/menu';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatTreeModule } from '@angular/material/tree';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

import { AvatarComponent } from './components/avatar/avatar.component';
import { CardComponent } from './components/card/card.component';
import { CustomerListComponent } from './components/customer-list/customer-list.component';
import { DishesListComponent } from './components/dish-list/dishes-list.component';
import { HeaderComponent } from './components/header/header.component';
import { LogoComponent } from './components/logo/logo.component';
import { MainLayoutComponent } from './components/main-layout/main-layout.component';
import { OrderTableComponent } from './components/order-table/order-table.component';
import { SidebarLinksComponent } from './components/sidebar-links/sidebar-links.component';
import { SidebarNavGroupComponent } from './components/sidebar-nav-group/sidebar-nav-group.component';
import { FooterActionsComponent } from './components/footer-actions/footer-icons.component';

import { MatSnackBarModule } from '@angular/material/snack-bar';
import { RestaurantFormComponent } from './components/restaurant-form/restaurant-form.component';

@NgModule({
  declarations: [
    HeaderComponent,
    AvatarComponent,
    MainLayoutComponent,
    LogoComponent,
    SidebarNavGroupComponent,
    SidebarLinksComponent,
    FooterActionsComponent,
    CardComponent,
    CustomerListComponent,
    DishesListComponent,
    OrderTableComponent,
    CardComponent,
    RestaurantFormComponent,
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatChipsModule,
    MatDividerModule,
    MatFormFieldModule,
    MatIconModule,
    MatTableModule,
    MatListModule,
    MatInputModule,
    MatSnackBarModule,
    MatTreeModule,
    MatSidenavModule,
    ReactiveFormsModule,
    RouterLink,
    RouterLinkActive,
    RouterOutlet,
    MatRippleModule,
    MatMenuModule,
    RouterLinkActive,
    MatTooltipModule,
    MatInputModule,
    MatFormFieldModule,
    ReactiveFormsModule,
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
    MatSidenavModule,
    MatSnackBarModule,
    ReactiveFormsModule,
    CustomerListComponent,
    DishesListComponent,
    OrderTableComponent,
    MatMenuModule,
    MatTooltipModule,
    CardComponent,
    RestaurantFormComponent,
  ],
})
export class SharedModule {}
