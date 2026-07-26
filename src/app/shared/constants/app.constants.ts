export const appUi = {
  appLogUrl: 'assets/icons/logo.png',
} as const;

export enum USER_ROLE {
  ADMIN = 'admin',
  OWNER = 'owner',
}

export const ORDER_STATUS = {
  ACTIVE: 'pending',
  CANCELLED: 'cancelled',
  COMPLETED: 'Completed',
};

export const SERVICE_ERROR = {
  CUSTOMER_MESSAGE: 'Failed to load customers. Please try again.',
  ORDER_MESSAGE: 'Failed to load order. Please try again.',
  RESTAURANT_MESSAGE: 'Failed to load Restaurants. Please try again.',
  MENU_ITEM: 'Failed to load menu items. Please try again.',
};
