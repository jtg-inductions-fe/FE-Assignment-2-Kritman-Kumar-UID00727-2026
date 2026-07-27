import { Component, OnInit, inject, DestroyRef } from '@angular/core';
import { Router } from '@angular/router';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

import { MatTableDataSource } from '@angular/material/table';

import { RestaurantService } from '@core/services/restaurant/restaurant.service';
import { Restaurant } from '@shared/models/restaurants.model';
import { RESTAURANT_CONFIG, RESTAURANT_ROUTS } from '../restaurants.constant';

@Component({
  selector: 'app-view-all-restaurants',
  templateUrl: './view-all-restaurants.component.html',
  styleUrls: ['./view-all-restaurants.component.scss'],
})
export class ViewAllRestaurantsComponent implements OnInit {
  private readonly restaurantService = inject(RestaurantService);
  private readonly router = inject(Router);
  private readonly destroyRef = inject(DestroyRef);

  restaurantsList = new MatTableDataSource<Restaurant>([]);
  restaurantsColumns = RESTAURANT_CONFIG.COLUMNS;

  ngOnInit(): void {
    this.restaurantService.allRestaurants$.pipe(takeUntilDestroyed(this.destroyRef)).subscribe({
      next: (restaurants) => {
        this.restaurantsList.data = restaurants;
      },
    });

    if (this.restaurantService.getRestaurantsSnapshot().length === 0) {
      this.restaurantService.loadAllRestaurants();
    }
  }

  addNewRestaurant() {
    this.router.navigate([RESTAURANT_ROUTS.RESTAURANTS, RESTAURANT_ROUTS.ADD_RESTAURANT]);
  }

  editRestaurant(restaurant: Restaurant): void {
    this.router.navigate([
      RESTAURANT_ROUTS.RESTAURANTS,
      RESTAURANT_ROUTS.EDIT_RESTAURANT,
      restaurant.id,
    ]);
  }
}
