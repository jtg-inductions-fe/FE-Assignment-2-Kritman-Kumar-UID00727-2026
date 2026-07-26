import { HttpClient } from '@angular/common/http';
import { DestroyRef, inject,Injectable } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ORDERS_URL } from '@shared/constants/api.constants';
import { Order } from '@shared/models/order.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

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
    // todo we will change the url when real api is available
    return this.http.get<Order[]>(ORDERS_URL).pipe(
      takeUntilDestroyed(this.destroyRef),
      map((orders) => orders.filter((order) => order.restaurantId.toString() === restaurantId)),
    );
  }

  // todo when api is provided.
  // updateOrderStatusById(orderId: string, status: Status) {}
}
