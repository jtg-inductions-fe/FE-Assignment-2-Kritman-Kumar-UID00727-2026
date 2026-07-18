import { Component, inject } from '@angular/core';
import { SidebarService } from '@app/core/services/sidebar.service';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss'],
})
export class MainLayoutComponent {
  private sidebarService = inject(SidebarService);

  isToggled$ = this.sidebarService.isToggled$;
}
