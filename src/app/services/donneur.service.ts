import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, timer } from 'rxjs';
import { environment } from 'src/environments/environment';
import { DonneurModel } from '../models/donneur.model';
import { map, mergeMap } from 'rxjs/operators';

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
        return this.http.get<any>(environment.urlDonneurs).pipe(map(rrdto => rrdto.data));
    }

    getDonneurById(id: number): Observable<DonneurModel> {
        return this.http.get<any>(`${environment.urlDonneurs}/${id}`);
    }

    getTopDonneursRefresh(): Observable<Array<DonneurModel>> {
        return timer(0, 10000).pipe(
            mergeMap(
                () => this.http.get<any>(environment.urlDonneurs).pipe(map(rrdto => rrdto.data.splice(0, 5)))
            )
        );
    }

    ajouterDonneur(donneur: DonneurModel): Observable<DonneurModel> {
        return this.http.post<DonneurModel>(environment.urlDonneurs, donneur);
    }
}