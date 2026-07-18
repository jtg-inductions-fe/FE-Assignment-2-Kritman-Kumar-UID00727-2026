import { Injectable } from '@angular/core';
import { AuthUser } from '@app/shared/models/auth.model';
import { Observable, of } from 'rxjs';
import { delay, map } from 'rxjs/operators';

import users from '@app/mocks/auth/user.json';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly mockUsers: AuthUser[] = users as AuthUser[];

  user: AuthUser | null = null;

  login(email: string, password: string): Observable<boolean> {
    const user = this.mockUsers.find((u) => u.email === email && u.password === password);

    this.user = user ? user : null;

    return of(!!user).pipe(delay(1500));
  }

  isLoggedIn() {
    // return this.user ? true : null;

    return true; // for now it true for development.
  }
}
