import { Component, inject } from '@angular/core';
import { RouteConfigLoadEnd, RouteConfigLoadStart, Router } from '@angular/router';

import { LoadingService } from '@core/services/loading/loadings.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  private readonly router = inject(Router);

  readonly loadingService = inject(LoadingService);

  constructor() {
    this.router.events.subscribe((event) => {
      if (event instanceof RouteConfigLoadStart) {
        this.loadingService.showAppLoading();
      }

      if (event instanceof RouteConfigLoadEnd) {
        this.loadingService.hideAppLoading();
      }
    });
  }
}
