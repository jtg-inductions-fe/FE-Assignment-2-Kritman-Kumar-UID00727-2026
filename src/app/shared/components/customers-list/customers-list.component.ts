import { Component, Input } from '@angular/core';
import { Customer } from '@shared/models/customer.model';

@Component({
  selector: 'app-customers-list',
  templateUrl: './customers-list.component.html',
  styleUrls: ['./customers-list.component.scss'],
})
export class CustomerListComponent {
  @Input() customerList: Customer[] = [];
}
