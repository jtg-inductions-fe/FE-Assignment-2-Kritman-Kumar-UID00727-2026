import { Location } from '@angular/common';
import { Component, inject } from '@angular/core';

import { RestaurantView } from '@shared/models/restaurants.model';

@Component({
  selector: 'app-edit-restaurant',
  templateUrl: './edit-restaurant.component.html',
  styleUrls: ['./edit-restaurant.component.scss'],
})
export class EditRestaurantComponent {
  private readonly location = inject(Location);

  userDetails: RestaurantView = {
    name: 'kritman',
    address: 'bihar Bagaha 2',
    owners: ['kritman@gamil.com', 'kritman1@gmail.com'],
  };

  updateRestaurant(restaurant: RestaurantView): void {
    console.log('Updated restaurant:', restaurant);

    // TODO: Call update restaurant API
  }

  goBack(): void {
    this.location.back();
  }
}
