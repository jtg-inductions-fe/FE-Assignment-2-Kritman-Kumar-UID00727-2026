import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { AUTH_ROUTS } from './auth.constants';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: AUTH_ROUTS.LOGIN,
  },
  {
    path: AUTH_ROUTS.LOGIN,
    component: LoginComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
