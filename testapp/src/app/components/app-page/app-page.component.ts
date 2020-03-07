import { Component, Input } from '@angular/core';
import { UIRouter } from '@uirouter/core';

@Component({
  selector: 'app-page',
  templateUrl: './app-page.component.html',
  styleUrls: ['./app-page.component.scss']
})
export class AppPageComponent {
  @Input() title: string;
  @Input() showLogout = false;

  constructor(private readonly router: UIRouter) {}

  logout() {
    localStorage.removeItem('jwt');
    this.router.stateService.go('welcome');
  }
}
