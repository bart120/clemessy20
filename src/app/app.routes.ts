import { Routes } from '@angular/router';
import { LoginComponent } from './pages/auth/login/login.component';
import { HomeComponent } from './pages/autre/home/home.component';
import { IntrouvableComponent } from './pages/autre/introuvable/introuvable.component';
import { DonneurAjouterComponent } from './pages/donneur/donneur-ajouter/donneur-ajouter.component';
import { DonneurListComponent } from './pages/donneur/donneur-list/donneur-list.component';

/**
 * Les routes de l'app
 */
export const APP_ROUTES: Routes = [
    {
        path: 'donneurs', children: [

            { path: 'liste', component: DonneurListComponent },
            { path: 'ajouter', component: DonneurAjouterComponent }
        ]
    },
    //{ path: 'auth/login', component: LoginComponent },
    { path: 'auth', loadChildren: () => import('./pages/auth/auth.module').then(x => x.AuthModule) },
    { path: '404', component: IntrouvableComponent },
    { path: 'home', component: HomeComponent },
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: '**', redirectTo: '404' }
];