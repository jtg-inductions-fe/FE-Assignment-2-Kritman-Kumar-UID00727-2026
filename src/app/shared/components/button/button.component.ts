import { Component, Input } from '@angular/core';
import { ButtonType } from '@shared/types/button-type.type';
import { ButtonVariant } from '@shared/types/button-variant.type';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
  @Input() label = '';
  @Input() variant: ButtonVariant = 'primary';
  @Input() icon?: string;
  @Input() type: ButtonType = 'button';
}
