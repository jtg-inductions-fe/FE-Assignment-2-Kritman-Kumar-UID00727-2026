import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn, Router } from '@angular/router';
import { UserService } from '@core/services/user/user.service';
import { APP_ROUTES } from '@app/shared/constants/routes.constants';
import { AUTH_ROUTS } from '@app/modules/auth/auth.constants';

export const roleGuard: CanActivateFn = (route: ActivatedRouteSnapshot) => {
  const userService = inject(UserService);
  const router = inject(Router);

  const requiredRole = route.data['role'];
  const user = userService.getUser();

  if (!user) {
    return router.createUrlTree([APP_ROUTES.AUTH, AUTH_ROUTS.LOGIN]);
  }

  if (user.role !== requiredRole) {
    return router.createUrlTree([APP_ROUTES.UNAUTHORIZED]);
  }

  return true;
};
