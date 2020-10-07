import { Injectable } from '@angular/core';
import { UserModel } from '../models/user.model';
import { LoginService } from './login.service';

@Injectable({ providedIn: 'root' })
export class AuthService {

    private _user: UserModel = null;

    get user(): UserModel {
        return this._user;
    }

    constructor(private servLog: LoginService) { }

    login(login: string, password: string): void {
        this.servLog.login(login, password).subscribe(data => {
            console.log(data);
        })
    }

    logout(): void {

    }
}