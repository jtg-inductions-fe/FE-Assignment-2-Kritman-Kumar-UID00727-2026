import { CARD_COLOR } from '@app/shared/components/card/card.consent';

export const DASHBOARD = {
  TOP_CUSTOMER_COUNT: 5,
  TOP_MENU_ITEM_COUNT: 5,
  DEFAULT_RESTAURANT_FILTER: 'All Restaurants',
  ADMIN_RESTAURANT_ID: '0',
  ADMIN_PAGE_DESCRIPTION:
    'System administrator overview panel. Impersonate owners or view aggregate metrics.',
  OWNER_PAGE_DESCRIPTION:
    'Welcome back, restaurant partner! Track your orders and performance details.',
};

export const defaultRestaurantStats = {
  activeRestaurantsStats: {
    title: 'Active Restaurants',
    description: 'NA',
    icon: 'restaurant',
    color: CARD_COLOR.SECONDARY,
  },
  revenueStats: {
    title: 'Total Revenue',
    description: 'NA',
    icon: 'attach_money',
    color: CARD_COLOR.PRIMARY,
  },
  restaurantOwnersStats: {
    title: 'Restaurant Owners',
    description: 'NA',
    icon: 'diamond',
    color: CARD_COLOR.SECONDARY,
  },
};

export const defaultOrderStats = {
  totalOrdersStats: {
    title: 'Total Orders',
    description: 'NA',
    icon: 'check_circle',
    color: CARD_COLOR.WARNING,
  },
  completedOrdersStats: {
    title: 'Completed Orders',
    description: 'NA',
    icon: 'attach_money',
    color: CARD_COLOR.PRIMARY,
  },
};
