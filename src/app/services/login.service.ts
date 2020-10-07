

import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class LoginService {

    constructor(private htpp: HttpClient) { }

    login(login: string, password: string): Observable<any> {
        let headers = new HttpHeaders();
        headers = headers.set('Authorization', 'Basic Y2xpZW50OnNlY3JldA==');
        headers = headers.set('Content-Type', 'application/x-www-form-urlencoded');

        const params = new HttpParams({
            fromObject: {
                grant_type: 'password',
                username: login,
                password: password,
                scope: 'read write
            }
        });
        return this.htpp.post(environment.urlAuth, params, { headers: headers });
    }
}