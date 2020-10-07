

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class LoginService {

    constructor(private htpp: HttpClient) { }

    login(login: string, password: string): Observable<any> {
        let header = { 'Authorization': 'Basic Y2xpZW50OnN1Y3JldA==' };
        return this.htpp.post(environment.urlAuth, { grantype: 'password', username: login, password: password, scope: 'read write' },)
    }
}