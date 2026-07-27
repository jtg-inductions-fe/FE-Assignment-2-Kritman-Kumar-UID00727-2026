import { Component, inject } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

import { Restaurant, RestaurantView } from '@shared/models/restaurants.model';
import { RestaurantService } from '@core/services/restaurant/restaurant.service';
import { RESTAURANT_ROUTS } from '../restaurants.constant';

@Component({
  selector: 'app-add-restaurant',
  templateUrl: './add-restaurant.component.html',
  styleUrls: ['./add-restaurant.component.scss'],
})
export class AddRestaurantComponent {
  private readonly location = inject(Location);
  private readonly restaurantService = inject(RestaurantService);
  private readonly router = inject(Router);

  createRestaurant(restaurant: RestaurantView): void {
    const id = crypto.randomUUID().toString();
    const newRestaurant: Restaurant = { ...restaurant, id, isActive: true };

    this.restaurantService.addNewRestaurant(newRestaurant);
    this.router.navigate([RESTAURANT_ROUTS.RESTAURANTS]);
  }

  goBack(): void {
    this.location.back();
  }
}
