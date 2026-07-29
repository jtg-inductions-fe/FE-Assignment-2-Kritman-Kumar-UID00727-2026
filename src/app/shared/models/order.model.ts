import { Status } from '../types/status.type';

export interface MenuItem {
  id: string;
  name: string;
  restaurantId?: string;
  restaurantName?: string;
  TotalOrder: number;
  isVeg?: boolean;
}

export interface Order {
  id: string;
  restaurantId: string;
  restaurantName: string;
  customerId: number;
  amount: number;
  status: Status;
  items: MenuItem[];
}
