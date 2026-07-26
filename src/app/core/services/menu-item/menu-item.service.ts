import { HttpClient } from '@angular/common/http';
import { inject,Injectable } from '@angular/core';
import { MENU_ITEMS_URL } from '@shared/constants/api.constants';
import { MenuItem } from '@shared/models/order.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MenuItemService {
  private readonly http = inject(HttpClient);

  getAllMenuItems(): Observable<MenuItem[]> {
    return this.http.get<MenuItem[]>(MENU_ITEMS_URL);
  }
}
