import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { AUTH_ROUT } from './auth.constants';

const routes: Routes = [
  {
    path: '',
    redirectTo: AUTH_ROUT.LOGIN,
    pathMatch: 'full',
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
