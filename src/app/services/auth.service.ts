import { Injectable } from '@angular/core';
import { UserModel } from '../models/user.model';

@Injectable({ providedIn: 'root' })
export class AuthService {

    private _user: UserModel = null;

    get user(): UserModel {
        return this._user;
    }

    login(login: string, password: string): void {

    }

    logout(): void {

    }
}