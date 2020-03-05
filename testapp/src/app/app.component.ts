import { Component, OnInit } from '@angular/core';
import { UIRouter } from '@uirouter/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private readonly router: UIRouter) {
  }

  ngOnInit() {
    if (!localStorage.getItem('jwt')) {
      this.router.stateService.go('login');
    }
  }
}
