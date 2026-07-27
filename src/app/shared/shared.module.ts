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
import { MatTreeModule } from '@angular/material/tree';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

import { AvatarComponent } from './components/avatar/avatar.component';
import { ButtonComponent } from './components/button/button.component';
import { CardComponent } from './components/card/card.component';
import { CustomerListComponent } from './components/customer-list/customer-list.component';
import { DishesListComponent } from './components/dishes-list/dishes-list.component';
import { FooterIconsComponent } from './components/footer-icons/footer-icons.component';
import { HeaderComponent } from './components/header/header.component';
import { LogoComponent } from './components/logo/logo.component';
import { MainLayoutComponent } from './components/main-layout/main-layout.component';
import { OrderTableComponent } from './components/order-table/order-table.component';
import { ProfileCartComponent } from './components/profile-card/profile-card.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { SidebarLinksComponent } from './components/sidebar-links/sidebar-links.component';
import { RestaurantFormComponent } from './components/restaurant-form/restaurant-form.component';

@NgModule({
  declarations: [
    AvatarComponent,
    ButtonComponent,
    HeaderComponent,
    LogoComponent,
    MainLayoutComponent,
    ProfileCartComponent,
    SidebarComponent,
    SidebarLinksComponent,
    FooterIconsComponent,
    CardComponent,
    CustomerListComponent,
    DishesListComponent,
    OrderTableComponent,
    RestaurantFormComponent,
  ],
  imports: [
    CommonModule,
    RouterLink,
    RouterLinkActive,
    RouterOutlet,
    MatButtonModule,
    MatChipsModule,
    MatDividerModule,
    MatIconModule,
    MatSidenavModule,
    MatTreeModule,
    MatRippleModule,
    MatListModule,
    MatTableModule,
    MatInputModule,
    MatFormFieldModule,
    ReactiveFormsModule,
  ],
  exports: [
    HeaderComponent,
    AvatarComponent,
    ButtonComponent,
    CardComponent,
    CustomerListComponent,
    DishesListComponent,
    OrderTableComponent,
    RestaurantFormComponent,
  ],
})
export class SharedModule {}
