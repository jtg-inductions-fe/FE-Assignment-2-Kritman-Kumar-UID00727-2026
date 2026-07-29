import { HttpClient } from '@angular/common/http';
import { inject,Injectable } from '@angular/core';
import { CUSTOMERS_URL } from '@shared/constants/api.constants';
import { Customer } from '@shared/models/customer.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CustomerService {
  private readonly http = inject(HttpClient);

  getAllCustomers(): Observable<Customer[]> {
    return this.http.get<Customer[]>(CUSTOMERS_URL);
  }
}
