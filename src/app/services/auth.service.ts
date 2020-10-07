import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { UserModel } from '../models/user.model';
import { LoginService } from './login.service';

@Injectable({ providedIn: 'root' })
export class AuthService {

    private _user: UserModel = null;

    private sujet: BehaviorSubject<UserModel> = new BehaviorSubject<UserModel>(null);

    get user(): UserModel {
        return this._user;
    }

    get user$(): Observable<UserModel> {
        return this.sujet.asObservable();
    }

    constructor(private servLog: LoginService, private router: Router) {
        this._user = JSON.parse(sessionStorage.getItem('USER')) as UserModel;
        this.sujet.next(this._user);
        console.log('next constructeur');
    }

    login(login: string, password: string): void {
        this.servLog.login(login, password).subscribe(data => {
            this._user = { email: login, token: data.access_token };
            sessionStorage.setItem('USER', JSON.stringify(this._user));
            this.sujet.next(this._user);
        });
    }

    logout(): void {
        this._user = null;
        sessionStorage.removeItem('USER');
        this.sujet.next(null);
        this.router.navigate(['/']);
    }
}