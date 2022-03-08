import { Component } from '@angular/core';
import { NbMenuItem, NbSidebarService } from '@nebular/theme';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
})
export class AppComponent {
  constructor(private sidebarService: NbSidebarService) {}

  title = 'todo';
  toggle() {
    this.sidebarService.toggle(true);
    return false;
  }
  toggleCompact() {
    this.sidebarService.toggle(true, 'right');
  }
}
