import { Component, inject, DestroyRef, signal } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Router } from '@angular/router';

import { finalize } from 'rxjs/operators';

import { MatSnackBar } from '@angular/material/snack-bar';

import { AuthService } from '@core/services/auth/auth.service';
import { APP_ROUTES } from '@shared/constants/routes.constants';

import { AUTH_FORM, AUTH_SUBMIT_MESSAGES, AUTH_VALIDATION_MESSAGES } from '../auth.constants';
import { MAT_ACTION_CLOSE, MAT_SNACK_BAR_CONFIG } from '@shared/constants/app.constants';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  private matSnackBar = inject(MatSnackBar);

  private readonly destroyRef = inject(DestroyRef);
  private readonly loginFormBuilder = inject(FormBuilder);
  private readonly router = inject(Router);
  private readonly authService = inject(AuthService);

  readonly $isLoading = signal(false);
  readonly $hidePassword = signal(true);

  readonly loginForm = this.loginFormBuilder.nonNullable.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(AUTH_FORM.PASSWORD_MINIMUM_LENGTH)]],
  });

  get email() {
    return this.loginForm.controls.email;
  }

  get password() {
    return this.loginForm.controls.password;
  }

  get emailError() {
    if (this.email.hasError('required')) {
      return AUTH_VALIDATION_MESSAGES.EMAIL.REQUIRED;
    }

    if (this.email.hasError('email')) {
      return AUTH_VALIDATION_MESSAGES.EMAIL.INVALID_EMAIL;
    }

    return '';
  }

  get passwordError() {
    if (this.password.hasError('required')) {
      return AUTH_VALIDATION_MESSAGES.PASSWORD.REQUIRED;
    }

    if (this.password.hasError('minlength')) {
      return AUTH_VALIDATION_MESSAGES.PASSWORD.INVALID_PASSWORD;
    }

    return '';
  }

  togglePasswordVisibility(): void {
    this.$hidePassword.update((value) => !value);
  }

  onLogInFormSubmit(): void {
    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();

      return;
    }

    this.$isLoading.set(true);

    const { email, password } = this.loginForm.getRawValue();

    this.authService
      .login(email, password)
      .pipe(
        takeUntilDestroyed(this.destroyRef),
        finalize(() => {
          this.$isLoading.set(false);
        }),
      )
      .subscribe({
        next: (success) => {
          if (!success) {
            this.matSnackBar.open(
              AUTH_SUBMIT_MESSAGES.INVALID_CREDENTIALS,
              MAT_ACTION_CLOSE,
              MAT_SNACK_BAR_CONFIG,
            );
            return;
          }

          this.router.navigate([APP_ROUTES.DASHBOARD]);
        },
        error: () => {
          this.matSnackBar.open(
            AUTH_SUBMIT_MESSAGES.SERVER_ERROR,
            MAT_ACTION_CLOSE,
            MAT_SNACK_BAR_CONFIG,
          );
        },
      });
  }
}
