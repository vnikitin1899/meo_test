import { Injectable } from '@angular/core';
import { MockDataService } from './mock-data.service';
import { LoginModel } from '../models/login.model';
import { Observable, Observer } from 'rxjs';
import { timeout } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private readonly dataService: MockDataService) { }

  login(data: LoginModel): Observable<string> {
    return new Observable<string>((observer: Observer<string>) => {
      const result = this.dataService.getLoginResult();
      observer.next(result);
    });
  }
}
