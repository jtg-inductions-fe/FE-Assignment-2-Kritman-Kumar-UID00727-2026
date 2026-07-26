import { Component, Input } from '@angular/core';
import { Customer } from '@shared/models/customer.model';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.scss'],
})
export class CustomerListComponent {
  @Input() customerList: Customer[] = [];
}
