import {
  FormGroup,
  FormControl,
  ReactiveFormsModule,
  Validators,
  AbstractControl,
} from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { NgIf, NgClass } from '@angular/common';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { Router } from '@angular/router';

import { AuthService } from '@app/core/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  standalone: true,
  imports: [
    MatInputModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatIconModule,
    MatButtonModule,
    MatDividerModule,
    NgIf,
    NgClass,
    MatProgressBarModule,
  ],
})
export class LoginComponent implements OnInit {
  hide = true;
  validUser = true;
  message: null | string = '';
  loading = false;

  userForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
  });

  constructor(
    private authService: AuthService,
    private router: Router,
  ) {}

  ngOnInit() {
    this.userForm.valueChanges.subscribe(() => {
      this.validUser = true;
      this.message = '';
    });
  }

  get f(): { [key: string]: AbstractControl } {
    return this.userForm.controls;
  }

  onSubmit(): void {
    if (this.userForm.invalid) {
      this.userForm.markAllAsTouched();
      return;
    }

    this.loading = true;
    this.message = '';

    const { email, password } = this.userForm.getRawValue();

    this.authService.login(email!, password!).subscribe({
      next: (success) => {
        this.loading = false;

        if (!success) {
          this.validUser = false;
          this.message = 'Invalid email or password';
          console.log(this.message);
          return;
        }

        this.router.navigate(['/dashboard']);
      },
      error: () => {
        this.loading = false;
        this.validUser = false;
        this.message = 'Something went wrong. Please try again.';
      },
    });
  }
}
