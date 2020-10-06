import { Component, OnInit } from '@angular/core';
import { DonneurModel } from 'src/app/models/donneur.model';
import { DonneurService } from 'src/app/services/donneur.service';

@Component({
  selector: 'app-donneur-list',
  templateUrl: './donneur-list.component.html',
  styles: [
  ]
})
export class DonneurListComponent implements OnInit {

  donneurs: Array<DonneurModel> = null;
  //private servDonneur:DonneurService = null;

  constructor(private servDonneur: DonneurService) {
    //this.servDonneur = servDonneur;
  }

  ngOnInit(): void {
    //this.donneurs = this.servDonneur.getDonneurs();
    this.servDonneur.getDonneurs().subscribe(data => {
      this.donneurs = data;
    });
  }

}
