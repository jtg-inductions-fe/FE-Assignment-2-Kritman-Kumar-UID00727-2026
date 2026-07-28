import { inject, Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { map, tap } from 'rxjs/operators';

import { AuthUser } from '@shared/models/auth.model';
import users from '@mocks/auth/users.json';

import { UserService } from '../user/user.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly userService = inject(UserService);

  private readonly users = users as AuthUser[];

  login(email: string, password: string): Observable<boolean> {
    const user =
      this.users.find(
        (currentUser) => currentUser.email === email && currentUser.password === password,
      ) ?? null;

    return of(user).pipe(
      tap((user) => {
        if (user) {
          this.userService.setUser(user);
        }
      }),
      map((user) => !!user),
    );
  }

  logout(): void {
    this.userService.clearUser();
  }

  isLoggedIn(): boolean {
    return this.userService.$isLoggedIn();
  }
}
