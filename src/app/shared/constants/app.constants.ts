import { MatSnackBarConfig } from '@angular/material/snack-bar';

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
