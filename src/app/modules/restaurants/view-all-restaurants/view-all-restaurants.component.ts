import { Component, OnInit, OnDestroy, inject } from '@angular/core';
import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';
import { Subscription } from 'rxjs';

import { RestaurantService } from '@app/core/services/restaurant/restaurant.service';
import { RESTAURANT_CONFIG } from '../restaurants.constant';
import { Restaurant } from '@app/shared/models/restaurants.model';

@Component({
  selector: 'app-view-all-restaurants',
  templateUrl: './view-all-restaurants.component.html',
  styleUrls: ['./view-all-restaurants.component.scss'],
})
export class ViewAllRestaurantsComponent implements OnInit, OnDestroy {
  private readonly restaurantService = inject(RestaurantService);
  private readonly router = inject(Router);

  private restaurantSub!: Subscription;

  restaurantsList = new MatTableDataSource<Restaurant>([]);
  restaurantsColumns = RESTAURANT_CONFIG.COLUMNS;

  ngOnInit(): void {
    this.restaurantSub = this.restaurantService.allRestaurants$.subscribe({
      next: (restaurants) => {
        this.restaurantsList.data = restaurants;
      },
    });

    if (this.restaurantService.getRestaurantsSnapshot().length === 0) {
      this.restaurantService.loadAllRestaurants();
    }
  }

  editRestaurant(restaurant: Restaurant): void {
    this.router.navigate([`/restaurants/edit/${restaurant.id}`]);
  }

  ngOnDestroy(): void {
    if (this.restaurantSub) {
      this.restaurantSub.unsubscribe();
    }
  }
}
