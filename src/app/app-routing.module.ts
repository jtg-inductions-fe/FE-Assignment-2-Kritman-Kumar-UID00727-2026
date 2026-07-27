import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { authGuard } from '@core/guards/auth.guard';
import { roleGuard } from '@core/guards/role/role.guard';
import { MainLayoutComponent } from '@shared/components/main-layout/main-layout.component';
import { PageNotFoundComponent } from '@shared/components/page-not-found/page-not-found.component';
import { ErrorBoundaryComponent } from '@shared/components/error-boundary/error-boundary.component';
import { APP_ROUTES } from '@shared/constants/routes.constants';
import { USER_ROLE } from '@shared/constants/app.constants';

const routes: Routes = [
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
        path: APP_ROUTES.RESTAURANTS,
        canActivate: [roleGuard],
        data: {
          role: USER_ROLE.ADMIN,
        },
        loadChildren: () =>
          import('@modules/restaurants/restaurants.module').then((m) => m.RestaurantsModule),
      },
      {
        path: '',
        redirectTo: APP_ROUTES.DASHBOARD,
        pathMatch: 'full',
      },
      {
        path: APP_ROUTES.ERROR,
        component: ErrorBoundaryComponent,
      },
      {
        path: '**',
        component: PageNotFoundComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { bindToComponentInputs: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
