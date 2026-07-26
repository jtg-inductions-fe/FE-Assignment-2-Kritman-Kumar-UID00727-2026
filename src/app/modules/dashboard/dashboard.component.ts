import { Component, DestroyRef, inject,OnInit } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FormControl } from '@angular/forms';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CustomerService } from '@core/services/customer/customer.service';
import { MenuItemService } from '@core/services/menu-item/menu-item.service';
import { OrderService } from '@core/services/order/order.service';
import { RestaurantService } from '@core/services/restaurant/restaurant.service';
import { UserService } from '@core/services/user.service';
import { ORDER_STATUS, SERVICE_ERROR, USER_ROLE } from '@shared/constants/app.constants';
import { AuthUser } from '@shared/models/auth.model';
import { Customer } from '@shared/models/customer.model';
import { MenuItem, Order } from '@shared/models/order.model';
import { Restaurant } from '@shared/models/restaurants.model';
import { formatCurrency } from '@shared/utils/helpers';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

import { DASHBOARD, defaultOrderStats, defaultRestaurantStats } from './dashboard.config';
import { Stats } from './dashboard.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  private readonly userService = inject(UserService);
  private readonly restaurantService = inject(RestaurantService);
  private readonly destroyRef = inject(DestroyRef);
  private readonly customerService = inject(CustomerService);
  private readonly menuItemService = inject(MenuItemService);
  private readonly orderService = inject(OrderService);
  private readonly matSnackBar = inject(MatSnackBar);

  private user!: AuthUser | null;
  private restaurantsList: Restaurant[] = [];
  private allCustomer: Customer[] = [];
  private allMenuItems: MenuItem[] = [];
  private allOrders: Order[] = [];

  protected readonly userRole = this.userService.role;
  protected readonly USER_ROLE = USER_ROLE;
  protected readonly DASHBOARD = DASHBOARD;

  protected restaurantsFilteredOptions: Observable<string[]> | undefined;
  protected restaurantsFilterControl = new FormControl('');

  protected restaurantsFilterOptions: string[] = [];
  protected analytics = [];
  protected topCustomersList: Customer[] = [];
  protected topMenuItems: MenuItem[] = [];
  protected activeOrders: Order[] = [];
  protected stats: Stats[] = [];
  protected currRestaurantId: string = DASHBOARD.ADMIN_RESTAURANT_ID;

  ngOnInit() {
    this.getUser();
    this.getAllCustomers();
    this.getAllMenuItems();
    this.getallOrders();
    this.getAllRestaurants();
    this.configureFilter();
  }

  private configureFilter(): void {
    if (this.userRole() !== USER_ROLE.ADMIN) {return;}

    this.restaurantsFilterControl.setValue(this.DASHBOARD.DEFAULT_RESTAURANT_FILTER);

    this.restaurantsFilteredOptions = this.restaurantsFilterControl.valueChanges.pipe(
      startWith(''),
      map((value) => this.filterRestaurantsList(value || '')),
    );
  }

  private filterRestaurantsList(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.restaurantsFilterOptions.filter((option) =>
      option.toLowerCase().includes(filterValue),
    );
  }

  private getRestaurantsName(restaurantsList: Restaurant[]): string[] {
    return restaurantsList.map((restaurant: Restaurant) => restaurant.name);
  }

  private updateUi(): void {
    this.updateTopCustomers();
    this.updateTopMenuItems();
    this.getStats();

    if (this.userRole() === USER_ROLE.OWNER) {
      this.updateActiveOrders();
    }
  }

  private getAllRestaurants(): void {
    this.restaurantService
      .getAllRestaurant()
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe({
        next: (restaurantsList) => {
          this.restaurantsList = restaurantsList;
          this.restaurantsFilterOptions = [
            DASHBOARD.DEFAULT_RESTAURANT_FILTER,
            ...this.getRestaurantsName(restaurantsList),
          ];

          this.getStats();
        },
        error: () => {
          this.matSnackBar.open(SERVICE_ERROR.RESTAURANT_MESSAGE, 'Close', {
            duration: 3000,
            horizontalPosition: 'right',
            verticalPosition: 'top',
            panelClass: ['error-snackbar'],
          });
        },
      });
  }

  private getUser(): void {
    this.user = this.userService.getUser();

    this.currRestaurantId = this.user?.restaurantId || DASHBOARD.ADMIN_RESTAURANT_ID;
  }

  private getAllCustomers(): void {
    this.customerService
      .getAllCustomers()
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe({
        next: (allCustomer) => {
          this.allCustomer = allCustomer;

          this.updateTopCustomers();
          this.getStats();
        },
        error: () => {
          this.matSnackBar.open(SERVICE_ERROR.CUSTOMER_MESSAGE, 'Close', {
            duration: 3000,
            horizontalPosition: 'right',
            verticalPosition: 'top',
            panelClass: ['error-snackbar'],
          });
        },
      });
  }

  private updateTopCustomers(): void {
    if (this.currRestaurantId === DASHBOARD.ADMIN_RESTAURANT_ID) {
      this.topCustomersList = this.allCustomer
        .sort((customerA, customerB) => customerB.totalSpend - customerA.totalSpend)
        .slice(0, DASHBOARD.TOP_CUSTOMER_COUNT);

      return;
    }

    this.topCustomersList = this.allCustomer
      .filter((customer) => customer.restaurantId === this.currRestaurantId)
      .sort((customerA, customerB) => customerB.totalSpend - customerA.totalSpend)
      .slice(0, DASHBOARD.TOP_CUSTOMER_COUNT);
  }

  private getAllMenuItems(): void {
    this.menuItemService
      .getAllMenuItems()
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe({
        next: (allMenuItems) => {
          this.allMenuItems = allMenuItems;
          this.updateTopMenuItems();
        },
        error: () => {
          this.matSnackBar.open(SERVICE_ERROR.MENU_ITEM, 'Close', {
            duration: 3000,
            horizontalPosition: 'right',
            verticalPosition: 'top',
            panelClass: ['error-snackbar'],
          });
        },
      });
  }

  private updateTopMenuItems(): void {
    if (this.currRestaurantId === DASHBOARD.ADMIN_RESTAURANT_ID) {
      this.topMenuItems = this.allMenuItems
        .sort((itemA, itemB) => itemB.TotalOrder - itemA.TotalOrder)
        .slice(0, DASHBOARD.TOP_MENU_ITEM_COUNT);

      return;
    }

    this.topMenuItems = this.allMenuItems
      .filter((item) => item.restaurantId === this.currRestaurantId)
      .sort((itemA, itemB) => itemB.TotalOrder - itemA.TotalOrder)
      .slice(0, DASHBOARD.TOP_MENU_ITEM_COUNT);
  }

  private getallOrders(): void {
    this.orderService
      .getallOrders()
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe({
        next: (orders) => {
          this.allOrders = orders;
          this.updateActiveOrders();
          this.getStats();
        },
        error: () => {
          this.matSnackBar.open(SERVICE_ERROR.ORDER_MESSAGE, 'Close', {
            duration: 3000,
            horizontalPosition: 'right',
            verticalPosition: 'top',
            panelClass: ['error-snackbar'],
          });
        },
      });
  }

  updateActiveOrders(): void {
    if (this.currRestaurantId === DASHBOARD.ADMIN_RESTAURANT_ID) {
      this.activeOrders = this.allOrders.filter((order) => order.status === ORDER_STATUS.ACTIVE);

      return;
    }

    this.activeOrders = this.allOrders.filter(
      (order) =>
        order.status === ORDER_STATUS.ACTIVE && order.restaurantId === this.currRestaurantId,
    );
  }

  private getStats(): void {
    this.stats = [];

    this.getRevenueStats();
    this.getOrdersStats();
    this.getCompletedOrdersStat();

    if (this.userRole() === USER_ROLE.ADMIN) {
      this.getActiveRestaurantsStats();
    } else {
      this.getRestaurantOwnersStats();
    }
  }

  private getRevenueStats(): void {
    const { revenueStats } = defaultRestaurantStats;

    if (this.currRestaurantId === DASHBOARD.ADMIN_RESTAURANT_ID) {
      const totalRevenue = this.allOrders.reduce(
        (revenueAccumulator, currentOrder) => revenueAccumulator + currentOrder.amount,
        0,
      );

      revenueStats.description = formatCurrency(totalRevenue);
    } else {
      const totalRevenue = this.allOrders
        .filter((order) => order.restaurantId === this.currRestaurantId)
        .reduce((revenueAccumulator, currentOrder) => revenueAccumulator + currentOrder.amount, 0);

      revenueStats.description = formatCurrency(totalRevenue);
    }

    this.stats.push(revenueStats);
  }

  private getOrdersStats(): void {
    const { totalOrdersStats } = defaultOrderStats;

    if (this.currRestaurantId === DASHBOARD.ADMIN_RESTAURANT_ID) {
      totalOrdersStats.description = this.allOrders.length.toString();
    } else {
      totalOrdersStats.description = this.allOrders
        .filter((order) => order.restaurantId === this.currRestaurantId)
        .length.toString();
    }

    this.stats.push(totalOrdersStats);
  }

  private getCompletedOrdersStat(): void {
    const { completedOrdersStats } = defaultOrderStats;

    if (this.currRestaurantId === DASHBOARD.ADMIN_RESTAURANT_ID) {
      completedOrdersStats.description = this.allOrders
        .filter((order) => order.status === ORDER_STATUS.COMPLETED)
        .length.toString();
    } else {
      completedOrdersStats.description = this.allOrders
        .filter(
          (order) =>
            order.restaurantId === this.currRestaurantId && order.status === ORDER_STATUS.COMPLETED,
        )
        .length.toString();
    }

    this.stats.push(completedOrdersStats);
  }

  private getActiveRestaurantsStats() {
    const { activeRestaurantsStats } = defaultRestaurantStats;

    activeRestaurantsStats.description = this.restaurantsList
      .filter((restaurant) => restaurant.isActive)
      .length.toString();

    this.stats.push(activeRestaurantsStats);
  }

  private getRestaurantOwnersStats(): void {
    const { restaurantOwnersStats } = defaultRestaurantStats;

    restaurantOwnersStats.description =
      this.restaurantsList
        .find((restaurant) => restaurant.id === this.currRestaurantId)
        ?.owners.length.toString() || 'NA';

    this.stats.push(restaurantOwnersStats);
  }

  handleFilterValueChanged(selectionEvent: MatAutocompleteSelectedEvent): void {
    const currentSelectedOption = selectionEvent.option.value;

    if (currentSelectedOption === DASHBOARD.DEFAULT_RESTAURANT_FILTER) {
      this.currRestaurantId = DASHBOARD.ADMIN_RESTAURANT_ID;
    } else {
      this.currRestaurantId =
        this.restaurantsList.find((restaurant) => restaurant.name === currentSelectedOption)?.id ||
        DASHBOARD.ADMIN_RESTAURANT_ID;
    }

    this.updateUi();
  }
}
