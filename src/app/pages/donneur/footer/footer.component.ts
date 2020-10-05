import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styles: [
  ]
})
export class FooterComponent implements OnInit {

  donneurs: Array<any> = null;

  constructor() { }

  ngOnInit(): void {
    this.donneurs = [
      { nom: 'Orange', prenom: 'Bob' },
      { nom: 'Bleu', prenom: 'Bob' },
      { nom: 'Dupont', prenom: 'Jean' }
    ];
  }

}
