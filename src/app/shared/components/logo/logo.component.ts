import { Component } from '@angular/core';
import { appUi } from '@shared/constants/app.constants';

@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.scss'],
})
export class LogoComponent {
  appLogoUrl = appUi.appLogUrl;
}
