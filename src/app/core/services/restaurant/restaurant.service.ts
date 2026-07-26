import { HttpClient } from '@angular/common/http';
import { inject,Injectable } from '@angular/core';
import { RESTAURANTS_URL } from '@shared/constants/api.constants';
import { Restaurant } from '@shared/models/restaurants.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RestaurantService {
  private readonly http = inject(HttpClient);

  getAllRestaurant(): Observable<Restaurant[]> {
    return this.http.get<Restaurant[]>(RESTAURANTS_URL);
  }

  /*  todo when user api is provided

  getRestaurantById(restaurantId: string) {}

  addNewRestaurant(newRestaurant: Restaurant): void {}

  editRestaurant(restaurant: Restaurant) {}

  */
}
