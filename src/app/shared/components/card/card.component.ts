import { Component, Input } from '@angular/core';

import { CARD_COLOR } from './card.consent';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  @Input() title = '';
  @Input() color?: CARD_COLOR = CARD_COLOR.PRIMARY;
  @Input() description?: string;
  @Input() icon?: string;

  readonly CARD_COLOR = CARD_COLOR;
}
