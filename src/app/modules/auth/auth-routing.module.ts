import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { AUTH_ROUT } from './auth.constants';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: AUTH_ROUT.LOGIN,
  },
  {
    path: AUTH_ROUT.LOGIN,
    component: LoginComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
