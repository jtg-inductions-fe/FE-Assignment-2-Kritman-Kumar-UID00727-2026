import { Component, Input } from '@angular/core';

import { SidebarControlAction } from '@shared/models/sidebar.model';

@Component({
  selector: 'app-footer-actions',
  templateUrl: './footer-icons.component.html',
  styleUrls: ['./footer-icons.component.scss'],
})
export class FooterActionsComponent {
  @Input() actions: SidebarControlAction[] = [];
}
