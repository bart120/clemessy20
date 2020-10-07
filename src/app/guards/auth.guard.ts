import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate {

    isConnected: boolean = false;

    constructor(servAuth: AuthService, private snack: MatSnackBar, private router: Router) {
        servAuth.user$.subscribe(user => this.isConnected = user != null);
    }

    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<boolean> | Promise<boolean> | boolean {
        if (!this.isConnected) {
            this.snack.open(`Vous n'êtes pas connecté.`, 'OK');
            this.router.navigate(['/auth/login']);
        }
        return this.isConnected;
    }
}
