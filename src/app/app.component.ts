import { Component, computed, inject } from '@angular/core';
import { UserService } from '@core/services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  readonly userService = inject(UserService);
  readonly user = computed(() => this.userService.user());
}
