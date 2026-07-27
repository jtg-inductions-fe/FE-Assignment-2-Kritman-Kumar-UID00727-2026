import { Location } from '@angular/common';
import { Component, inject, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { RestaurantService } from '@core/services/restaurant/restaurant.service';
import { Restaurant, RestaurantView } from '@shared/models/restaurants.model';

import { RESTAURANT_ROUTS } from '../restaurants.constant';

@Component({
  selector: 'app-edit-restaurant',
  templateUrl: './edit-restaurant.component.html',
  styleUrls: ['./edit-restaurant.component.scss'],
})
export class EditRestaurantComponent implements OnInit {
  private readonly location = inject(Location);
  private readonly restaurantService = inject(RestaurantService);
  private readonly router = inject(Router);

  @Input() restaurantId!: string;

  userDetails: RestaurantView = {
    name: '',
    address: '',
    owners: [],
  };

  ngOnInit(): void {
    this.getRestaurantById();
  }

  private getRestaurantById() {
    if (!this.restaurantId) {
      return;
    }

    const restaurantResponse = this.restaurantService.getRestaurantById(this.restaurantId);

    if (restaurantResponse) {
      this.userDetails.name = restaurantResponse.name;
      this.userDetails.address = restaurantResponse.address;
      this.userDetails.owners = restaurantResponse.owners;
    }
  }

  updateRestaurant(restaurant: RestaurantView): void {
    const updatedRestaurant: Restaurant = {
      ...restaurant,
      isActive: true,
      id: this.restaurantId,
    };

    this.restaurantService.editRestaurant(updatedRestaurant);
    this.router.navigate([RESTAURANT_ROUTS.RESTAURANTS]);
  }

  goBack(): void {
    this.location.back();
  }
}
