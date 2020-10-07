import { Component, OnInit } from '@angular/core';
import { DonneurService } from 'src/app/services/donneur.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styles: [
  ]
})
export class FooterComponent implements OnInit {

  donneurs: Array<any> = null;

  constructor(private servDon: DonneurService) { }

  ngOnInit(): void {
    this.servDon.getTopDonneursRefresh().subscribe(
      data => this.donneurs = data
    );

    /*this.donneurs = [
      { nom: 'Orange', prenom: 'Bob' },
      { nom: 'Bleu', prenom: 'Bob' },
      { nom: 'Dupont', prenom: 'Jean' }
    ];*/
  }

}
