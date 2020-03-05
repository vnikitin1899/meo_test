import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MockDataService {
  getLoginResult() {
    const token = 'asasfsdfasdfdsfsdg223fr23f2f';
    return token;
  }

  get registerResult() {
    const registerResult = true;
    return registerResult;
  }
}
