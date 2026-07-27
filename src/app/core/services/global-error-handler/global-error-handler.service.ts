import { ErrorHandler, Injectable, inject } from '@angular/core';
import { Router } from '@angular/router';

import { APP_ROUTES } from '@shared/constants/routes.constants';

@Injectable({
  providedIn: 'root',
})
export class GlobalErrorHandlerService implements ErrorHandler {
  private router = inject(Router);

  handleError(): void {
    this.router.navigate([APP_ROUTES.ERROR]);
  }
}
