import { MatSnackBarConfig } from '@angular/material/snack-bar';

export const appUi = {
  appLogUrl: 'assets/logos/logo.png',
} as const;

export enum USER_ROLE {
  ADMIN,
  OWNER,
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

export const MAT_SNACK_BAR_CONFIG: MatSnackBarConfig = {
  duration: 3000,
  horizontalPosition: 'right',
  verticalPosition: 'top',
};

export const MAT_ACTION_CLOSE = 'Close';

export const BREAKPOINT = {
  MOBILE: '320px',
  TABLET: '768px',
  DESKTOP: '1024px',
  DESKTOP_XL: '1440px',
} as const;
