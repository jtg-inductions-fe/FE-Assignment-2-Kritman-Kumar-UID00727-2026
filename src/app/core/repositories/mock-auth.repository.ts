import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import users from '@app/mocks/auth/user.json';
import { AuthUser } from '@app/shared/models/auth.model';

import { AuthRepository } from './auth.repository';

@Injectable({
  providedIn: 'root',
})
export class MockAuthRepository extends AuthRepository {
  private readonly users = users as AuthUser[];

  override login(email: string, password: string): Observable<AuthUser | null> {
    const user = this.users.find((u) => u.email === email && u.password === password) ?? null;

    return of(user);
  }
}
