import { computed, Injectable, signal } from '@angular/core';
import { AuthUser } from '@app/shared/models/auth.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private readonly userSignal = signal<AuthUser | null>(null);
  readonly user = this.userSignal.asReadonly();
  readonly isLoggedIn = computed(() => this.userSignal() !== null);
  readonly role = computed(() => this.userSignal()?.role ?? null);
  setUser(user: AuthUser): void {
    this.userSignal.set(user);
  }
  clearUser(): void {
    this.userSignal.set(null);
  }
  getUser(): AuthUser | null {
    return this.userSignal();
  }
}
