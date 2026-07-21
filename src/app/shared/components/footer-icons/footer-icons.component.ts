import { Component, Input } from '@angular/core';
import { SidebarControlIcon } from '@shared/models/sidebar.model';

@Component({
  selector: 'app-footer-icons',
  templateUrl: './footer-icons.component.html',
  styleUrls: ['./footer-icons.component.scss'],
})
export class FooterIconsComponent {
  @Input() icons: SidebarControlIcon[] = [];
}
