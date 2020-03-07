import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class HttpService {
    host = '';
    constructor(private http: HttpClient) {}

    // tslint:disable-next-line: ban-types
    postData(route: string, data: Object): Observable<any> {
        return this.http.post(this.host + route, data);
    }
}
