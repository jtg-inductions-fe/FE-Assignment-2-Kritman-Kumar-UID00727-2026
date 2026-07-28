import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoadingService {
  private readonly $appLoadingSignal = signal(false);
  private readonly $dashboardLoadingSignal = signal(false);

  readonly $isAppLoading = this.$appLoadingSignal.asReadonly();
  readonly $isDashboardLoading = this.$dashboardLoadingSignal.asReadonly();

  showAppLoading(): void {
    this.$appLoadingSignal.set(true);
  }

  hideAppLoading(): void {
    this.$appLoadingSignal.set(false);
  }

  showDashboardLoading(): void {
    this.$dashboardLoadingSignal.set(true);
  }

  hideDashboardLoading(): void {
    this.$dashboardLoadingSignal.set(false);
  }
}
