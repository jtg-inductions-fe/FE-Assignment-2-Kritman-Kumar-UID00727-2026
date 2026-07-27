import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '@app/shared/shared.module';

import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';
import { MatCardModule } from '@angular/material/card';

import { RestaurantsRoutingModule } from './restaurants-routing.module';
import { ViewAllRestaurantsComponent } from './view-all-restaurants/view-all-restaurants.component';
import { EditRestaurantComponent } from './edit-restaurant/edit-restaurant.component';
import { AddRestaurantComponent } from './add-restaurant/add-restaurant.component';

@NgModule({
  declarations: [ViewAllRestaurantsComponent, EditRestaurantComponent, AddRestaurantComponent],
  imports: [
    CommonModule,
    RestaurantsRoutingModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    MatChipsModule,
    SharedModule,
    MatCardModule,
  ],
})
export class RestaurantsModule {}
