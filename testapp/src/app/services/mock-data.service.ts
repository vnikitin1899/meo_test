import { Injectable } from '@angular/core';
import { Observable, Observer } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MockDataService {
  loginResult = 'asfsadsdbsdvsdavasdvsdavsdvsdvsdv';

  mockRequest(route: string, data?) {
    let result;
    switch (route) {
      case 'api/auth': {
        result = this.loginResult;
        break;
      }
      case 'api/user/create': {
        result = data;
        break;
      }
    }
    return result;
  }
}
