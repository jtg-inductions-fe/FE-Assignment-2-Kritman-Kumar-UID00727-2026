import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SidebarService {
  private readonly $sidebarOpenSignal = signal(true);

  readonly $isSidebarOpen = this.$sidebarOpenSignal.asReadonly();

  toggleSideBar() {
    this.$sidebarOpenSignal.update((isOpen) => !isOpen);
  }

  setSidebarState(isOpen: boolean): void {
    this.$sidebarOpenSignal.set(isOpen);
  }
}
