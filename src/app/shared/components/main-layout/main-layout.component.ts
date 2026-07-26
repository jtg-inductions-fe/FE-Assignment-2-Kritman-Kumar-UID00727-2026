import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, computed, DestroyRef, inject, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { SidebarService } from '@core/services/sidebar.service';

import { BREAKPOINT } from './break-point.constant';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss'],
})
export class MainLayoutComponent {
  private readonly sidebarService = inject(SidebarService);
  private readonly breakpointObserver = inject(BreakpointObserver);
  private readonly destroyRef = inject(DestroyRef);

  readonly sidebarState = computed(() => this.sidebarService.isSidebarOpen());

  readonly isMobile = signal(false);

  constructor() {
    this.breakpointObserver
      .observe(`(max-width: ${BREAKPOINT.DESKTOP_BREAKPOINT})`)
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(({ matches }) => {
        this.isMobile.set(matches);

        this.sidebarService.setSidebarState(!matches);
      });
  }
}
