import { HttpClient } from '@angular/common/http';
import { DestroyRef, inject, Injectable } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { ORDERS_URL } from '@shared/constants/api.constants';
import { Order } from '@shared/models/order.model';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  private http = inject(HttpClient);
  private readonly destroyRef = inject(DestroyRef);

  getallOrders(): Observable<Order[]> {
    return this.http.get<Order[]>(ORDERS_URL);
  }

  getAllOrdersByRestaurantId(restaurantId: string): Observable<Order[]> {
    // TODO: Replace the mock URL with the real API endpoint once available. Include the filtering logic here using the dynamic route order/:id.

    return this.http.get<Order[]>(ORDERS_URL).pipe(
      takeUntilDestroyed(this.destroyRef),
      map((orders) => orders.filter((order) => order.restaurantId.toString() === restaurantId)),
    );
  }

  // TODO: Replace mock URL with real API endpoint once available.
  // updateOrderStatusById(orderId: string, status: Status) {}
}
