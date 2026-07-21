import { computed, Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SidebarService {
  private readonly sidebarOpenSignal = signal(true);

  readonly isSidebarOpen = this.sidebarOpenSignal.asReadonly();

  readonly isSidebarClosed = computed(() => !this.sidebarOpenSignal());

  openSidebar(): void {
    this.sidebarOpenSignal.set(true);
  }

  closeSidebar() {
    this.sidebarOpenSignal.set(false);
  }

  toggleSideBar() {
    this.sidebarOpenSignal.update((isOpen) => !isOpen);
  }

  setSidebarState(isOpen: boolean): void {
    this.sidebarOpenSignal.set(isOpen);
  }
}
