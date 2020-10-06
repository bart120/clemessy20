import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { DonneurModel } from '../models/donneur.model';

@Injectable({ providedIn: 'root' })
export class DonneurService {

    constructor(private http: HttpClient) { }

    getDonneurs(): Observable<Array<DonneurModel>> {
        /*this.http.get(environment.urlDonneurs).subscribe((data) => {
            console.log(data);
            
        });*/
        /*return [
            { nom: 'Orange', prenom: 'Bob' },
            { nom: 'Bleu', prenom: 'Bob' },
            { nom: 'Dupont', prenom: 'Jean' }
        ];*/
        return this.http.get<Array<DonneurModel>>(environment.urlDonneurs);
    }
}