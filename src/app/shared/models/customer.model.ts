import { BaseUser } from './auth.model';

export interface Customer extends BaseUser {
  restaurantId?: string;
  customerName: string;
  totalSpend: number;
}
