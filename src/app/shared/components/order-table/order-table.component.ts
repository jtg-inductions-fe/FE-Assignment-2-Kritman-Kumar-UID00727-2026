import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

import { MenuItem, Order } from '@shared/models/order.model';
import { Status } from '@shared/types/status.type';

import { TABLE } from './order-table.consent';
import { TableOrderItem } from './order-table.model';

@Component({
  selector: 'app-order-table',
  templateUrl: './order-table.component.html',
  styleUrls: ['./order-table.component.scss'],
})
export class OrderTableComponent implements OnChanges {
  @Input() ActiveOrderTableList: Order[] = [];

  readonly TABLE = TABLE;

  dataSource: TableOrderItem[] = [];
  displayedColumns: string[] = TABLE.COLUMNS_NAME;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['ActiveOrderTableList'] && this.ActiveOrderTableList) {
      this.transFromTableData();
    }
  }

  private transFromTableData() {
    this.dataSource = this.ActiveOrderTableList.map((order: any) => {
      const itemsString = order.items
        .map((item: MenuItem) => `${item.name} x${item.TotalOrder}`)
        .join(', ');

      return {
        id: order.id,
        restaurantName: order.restaurantName,
        customerName: order.customerName,
        items: itemsString,
        amount: order.amount,
        status: order.status,
      };
    });
  }

  private filterTableData(orderId: string) {
    this.dataSource = this.dataSource.filter((order) => order.id !== orderId);
  }

  changeOrderStatus(orderId: string, status: Status) {
    // for now i am just filter the updated list here.ActiveOrderTableList
    this.filterTableData(orderId);
  }
}
