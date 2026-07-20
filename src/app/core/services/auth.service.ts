import { inject, Injectable } from '@angular/core';
import { map, tap } from 'rxjs/operators';

import { MockAuthRepository } from '../repositories/mock-auth.repository';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly repository = inject(MockAuthRepository);
  private readonly userService = inject(UserService);

  login(email: string, password: string) {
    return this.repository.login(email, password).pipe(
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
    return this.userService.isLoggedIn();
  }
}
