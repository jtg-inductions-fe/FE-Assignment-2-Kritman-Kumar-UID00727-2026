import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

import { UserService } from '@core/services/user.service';
import { APP_ROUTES } from '@shared/constants/routes.constants';

export const authGuard: CanActivateFn = () => {
  const userService = inject(UserService);
  const router = inject(Router);

  if (userService.isLoggedIn()) {
    return true;
  }

  return router.createUrlTree([APP_ROUTES.AUTH]);
};
