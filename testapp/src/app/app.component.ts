import { Component, OnInit } from '@angular/core';
import { UtilsService } from './services/utils.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private readonly utils: UtilsService) {
  }

  ngOnInit() {
    this.utils.checkAuth();
  }
}
