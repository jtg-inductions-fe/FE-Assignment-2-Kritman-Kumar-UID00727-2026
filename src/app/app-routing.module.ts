import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { authGuard } from '@core/guards/auth.guard';
import { MainLayoutComponent } from '@shared/components/main-layout/main-layout.component';
import { APP_ROUTES } from './shared/constants/routes.constants';

const routes: Routes = [
  {
    path: '',
    redirectTo: APP_ROUTES.AUTH,
    pathMatch: 'full',
  },
  {
    path: APP_ROUTES.AUTH,
    loadChildren: () => import('@modules/auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: '',
    component: MainLayoutComponent,
    canActivate: [authGuard],
    children: [
      {
        path: APP_ROUTES.DASHBOARD,
        loadChildren: () =>
          import('@modules/dashboard/dashboard.module').then((m) => m.DashboardModule),
      },
      {
        path: '',
        redirectTo: APP_ROUTES.DASHBOARD,
        pathMatch: 'full',
      },
      {
        path: APP_ROUTES.RESTAURANTS,
        loadChildren: () =>
          import('@modules/restaurants/restaurants.module').then((m) => m.RestaurantsModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
