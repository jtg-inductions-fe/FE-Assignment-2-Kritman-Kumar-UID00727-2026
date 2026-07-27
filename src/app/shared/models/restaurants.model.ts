export interface Restaurant {
  id: string;
  name: string;
  owners: string[];
  address: string;
  isActive: boolean;
}

export interface RestaurantView {
  name: string;
  address: string;
  owners: string[];
}
