import { Component, inject } from '@angular/core';
import { Location } from '@angular/common';

import { RestaurantView } from '@shared/models/restaurants.model';

@Component({
  selector: 'app-add-restaurant',
  templateUrl: './add-restaurant.component.html',
  styleUrls: ['./add-restaurant.component.scss'],
})
export class AddRestaurantComponent {
  private readonly location = inject(Location);

  createRestaurant(restaurant: RestaurantView): void {
    console.log(restaurant);

    // todo API call here
  }

  goBack(): void {
    this.location.back();
  }
}
