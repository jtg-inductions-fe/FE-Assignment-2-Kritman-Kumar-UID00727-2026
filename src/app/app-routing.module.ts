import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { authGuard } from '@core/guards/auth.guard';
import { APP_ROUTES } from './shared/constants/routes.constants';

const routes: Routes = [
  {
    path: APP_ROUTES.HOME,
    redirectTo: APP_ROUTES.AUTH,
    pathMatch: 'full',
  },
  {
    path: APP_ROUTES.AUTH,
    loadChildren: () => import('./modules/auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: APP_ROUTES.DASHBOARD,
    loadChildren: () =>
      import('./modules/dashboard/dashboard.module').then((m) => m.DashboardModule),
    canActivate: [authGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
