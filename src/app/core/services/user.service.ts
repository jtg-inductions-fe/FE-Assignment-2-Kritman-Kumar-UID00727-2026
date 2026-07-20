import { Injectable } from '@angular/core';

import { AuthUser } from '@app/shared/models/auth.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private currentUser: AuthUser | null = null;

  setUser(user: AuthUser): void {
    this.currentUser = user;
  }

  getUser(): AuthUser | null {
    return this.currentUser;
  }

  getRole(): string | null {
    return this.currentUser?.role ?? null;
  }

  isLoggedIn(): boolean {
    return !!this.currentUser;
  }

  clearUser(): void {
    this.currentUser = null;
  }
}
