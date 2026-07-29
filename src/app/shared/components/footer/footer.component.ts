import { Component } from '@angular/core';

import { FOOTER_COPYRIGHT_TEXT, SOCIAL_LINKS_CONFIG } from './footer.config';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  readonly currentYear = new Date().getFullYear();

  SOCIAL_LINKS_CONFIG = SOCIAL_LINKS_CONFIG;
  FOOTER_COPYRIGHT_TEXT = FOOTER_COPYRIGHT_TEXT;
}
