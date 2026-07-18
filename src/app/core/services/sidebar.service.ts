import { Injectable } from '@angular/core';
import { BehaviorSubject, scan } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SidebarService {
  toggleClick$ = new BehaviorSubject<void>(undefined);

  public isToggled$ = this.toggleClick$.pipe(scan((state) => !state, false));

  public onToggle(): void {
    this.toggleClick$.next();
  }
}
