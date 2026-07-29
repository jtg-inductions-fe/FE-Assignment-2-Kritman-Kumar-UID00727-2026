import { Component, computed, inject, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { BreakpointObserver } from '@angular/cdk/layout';

import { SidebarService } from '@core/services/sidebar/sidebar.service';
import { BREAKPOINT } from '@shared/constants/app.constants';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss'],
})
export class MainLayoutComponent {
  private readonly sidebarService = inject(SidebarService);
  private readonly breakpointObserver = inject(BreakpointObserver);

  isTabletOrBelow = signal(false);

  readonly sidebarState = computed(() => this.sidebarService.$isSidebarOpen());

  toggleSideBar() {
    this.sidebarService.toggleSideBar();
  }

  constructor() {
    this.breakpointObserver
      .observe(`(max-width: ${BREAKPOINT.DESKTOP})`)
      .pipe(takeUntilDestroyed())
      .subscribe(({ matches }) => {
        this.isTabletOrBelow.set(matches);
        this.sidebarService.setSidebarState(!matches);
      });
  }
}
