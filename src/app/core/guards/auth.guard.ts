import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

import { AuthService } from '@app/core/services/auth.service';
import { APP_ROUTES } from '@shared/constants/routes.constants';

export const authGuard: CanActivateFn = () => {
  const authService = inject(AuthService);
  const router = inject(Router);

  if (authService.isLoggedIn()) {
    return true;
  }

  return router.createUrlTree([APP_ROUTES.LOGIN]);
};
