import { Injectable } from '@angular/core';
import { LoginModel } from '../models/login.model';
import { Observable } from 'rxjs';
import { HttpService } from './http.service';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private readonly http: HttpService) { }

  login(data: LoginModel): Observable<string> {
    return this.http.postData('api/auth', data);
  }

  regitstration(data: User): Observable<User> {
    return this.http.postData('api/user/create', data);
  }
}
