import { Injectable } from '@angular/core';
import { AuthUser } from '@app/shared/models/auth.model';
import { Observable, of } from 'rxjs';
import { delay, map } from 'rxjs/operators';

import users from '@app/mocks/auth/user.json';

const TOKEN_KEY = 'auth-token';
const USER_KEY = 'auth-user';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly mockUsers: AuthUser[] = users as AuthUser[];

  login0(email: string, password: string): boolean {
    const user = this.mockUsers.find((u) => u.email === email && u.password === password);

    if (!user) {
      return false;
    }

    localStorage.setItem(TOKEN_KEY, 'mock-jwt-token');
    localStorage.setItem(USER_KEY, JSON.stringify(user));

    return true;
  }

  login(email: string, password: string): Observable<boolean> {
    const user = this.mockUsers.find((u) => u.email === email && u.password === password);

    if (user) {
      localStorage.setItem('user', JSON.stringify(user));
      localStorage.setItem('token', 'mock-token');
    }

    return of(!!user).pipe(delay(1500));
  }

  logout(): void {
    localStorage.removeItem(TOKEN_KEY);
    localStorage.removeItem(USER_KEY);
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem(TOKEN_KEY);
  }

  getUser(): AuthUser | null {
    const user = localStorage.getItem(USER_KEY);

    return user ? JSON.parse(user) : null;
  }

  getRole(): string | null {
    return this.getUser()?.role ?? null;
  }

  getToken(): string | null {
    return localStorage.getItem(TOKEN_KEY);
  }
}
