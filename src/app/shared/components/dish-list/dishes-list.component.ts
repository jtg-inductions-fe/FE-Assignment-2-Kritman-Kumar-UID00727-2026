import { Component, Input } from '@angular/core';
import { MenuItem } from '@app/shared/models/order.model';

@Component({
  selector: 'app-dishes-list',
  templateUrl: './dishes-list.component.html',
  styleUrls: ['./dishes-list.component.scss'],
})
export class DishesListComponent {
  @Input() topDishes: MenuItem[] = [];
}
