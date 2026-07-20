import { Component, inject, signal } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { finalize } from 'rxjs/operators';

import { AuthService } from '@app/core/services/auth.service';
import { AUTH_FORM, AUTH_SUBMIT_MESSAGES, AUTH_VALIDATION_MESSAGES } from '../auth.constants';
import { APP_ROUTES } from '@shared/constants/routes.constants';
import { AUTH_UI } from '../auth.constants';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  private readonly fb = inject(FormBuilder);
  private readonly router = inject(Router);
  private readonly authService = inject(AuthService);

  readonly isLoading = signal(false);
  readonly serverError = signal('');
  readonly hidePassword = signal(true);
  readonly ui = AUTH_UI.login;

  readonly loginForm = this.fb.nonNullable.group({
    email: ['', [Validators.required, Validators.email]],

    password: ['', [Validators.required, Validators.minLength(AUTH_FORM.passwordMinLength)]],
  });

  get email() {
    return this.loginForm.controls.email;
  }

  get password() {
    return this.loginForm.controls.password;
  }

  get emailError(): string {
    if (this.email.hasError('required')) {
      return AUTH_VALIDATION_MESSAGES.email.required;
    }

    if (this.email.hasError('email')) {
      return AUTH_VALIDATION_MESSAGES.email.email;
    }

    return '';
  }

  get passwordError(): string {
    if (this.password.hasError('required')) {
      return AUTH_VALIDATION_MESSAGES.password.required;
    }

    if (this.password.hasError('minlength')) {
      return AUTH_VALIDATION_MESSAGES.password.minlength;
    }

    return '';
  }

  togglePasswordVisibility(): void {
    this.hidePassword.update((value) => !value);
  }

  onLogInFormSubmit(): void {
    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();

      return;
    }

    this.isLoading.set(true);
    this.serverError.set('');

    const { email, password } = this.loginForm.getRawValue();

    this.authService
      .login(email, password)
      .pipe(
        finalize(() => {
          this.isLoading.set(false);
        }),
      )
      .subscribe({
        next: (success) => {
          if (!success) {
            this.serverError.set(AUTH_SUBMIT_MESSAGES.invalidCredentials);

            return;
          }

          this.router.navigate([APP_ROUTES.DASHBOARD]);
        },

        error: () => {
          this.serverError.set(AUTH_SUBMIT_MESSAGES.serverError);
        },
      });
  }
}
