import { Component, OnInit } from '@angular/core';
import { UIRouter } from '@uirouter/core';
import { UtilsService } from 'src/app/services/utils.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  constructor(private readonly utils: UtilsService) { }

  ngOnInit() {
    this.utils.checkAuth();
  }
}
