import { DestroyRef, inject, Injectable } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

import { HttpClient } from '@angular/common/http';

import { BehaviorSubject, Observable } from 'rxjs';

import { RESTAURANTS_URL } from '@shared/constants/api.constants';
import { Restaurant } from '@app/shared/models/restaurant.model';

@Injectable({
  providedIn: 'root',
})
export class RestaurantService {
  private readonly http = inject(HttpClient);
  private readonly destroyRef = inject(DestroyRef);

  private readonly restaurants$ = new BehaviorSubject<Restaurant[]>([]);

  readonly allRestaurants$ = this.restaurants$.asObservable();

  loadAllRestaurants(): void {
    this.http
      .get<Restaurant[]>(RESTAURANTS_URL)
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe({
        next: (restaurants) => {
          this.restaurants$.next(restaurants);
        },
      });
  }

  getAllRestaurants(): Observable<Restaurant[]> {
    return this.http.get<Restaurant[]>(RESTAURANTS_URL);
  }

  getRestaurantById(restaurantId: string): Restaurant | null {
    const restaurant = this.restaurants$
      .getValue()
      .find((currRestaurant) => currRestaurant.id === restaurantId);

    return restaurant || null;
  }

  getRestaurantsSnapshot(): Restaurant[] {
    return this.restaurants$.getValue();
  }

  // TODO : setup http post method
  addNewRestaurant(restaurant: Restaurant): void {
    const currentList = this.getRestaurantsSnapshot();

    this.restaurants$.next([...currentList, restaurant]);
  }

  editRestaurant(updatedRestaurant: Restaurant): void {
    const currentList = this.getRestaurantsSnapshot();

    const updatedList = currentList.map((currRestaurant) =>
      currRestaurant.id === updatedRestaurant.id
        ? { ...currRestaurant, ...updatedRestaurant }
        : currRestaurant,
    );

    this.restaurants$.next([...updatedList]);
  }
}
