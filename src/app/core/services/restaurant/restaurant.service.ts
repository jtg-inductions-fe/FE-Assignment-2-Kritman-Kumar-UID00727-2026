import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

import { BehaviorSubject, Observable } from 'rxjs';

import { RESTAURANTS_URL } from '@shared/constants/api.constants';
import { Restaurant } from '@shared/models/restaurants.model';

@Injectable({
  providedIn: 'root',
})
export class RestaurantService {
  private readonly http = inject(HttpClient);

  private readonly restaurants$ = new BehaviorSubject<Restaurant[]>([]);

  readonly allRestaurants$ = this.restaurants$.asObservable();

  loadAllRestaurants(): void {
    this.http.get<Restaurant[]>(RESTAURANTS_URL).subscribe({
      next: (restaurants) => {
        this.restaurants$.next(restaurants);
      },
      error: (error) => {
        console.error('Failed to fetch restaurants:', error);
      },
    });
  }

  getAllRestaurant(): Observable<Restaurant[]> {
    return this.http.get<Restaurant[]>(RESTAURANTS_URL);
  }

  getRestaurantsSnapshot(): Restaurant[] {
    return this.restaurants$.getValue();
  }

  /*  todo when user api is provided

  getRestaurantById(restaurantId: string) {}

  addNewRestaurant(newRestaurant: Restaurant): void {}

  editRestaurant(restaurant: Restaurant) {}

  */
}
