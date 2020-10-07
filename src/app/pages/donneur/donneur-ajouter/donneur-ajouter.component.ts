import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DonneurModel } from 'src/app/models/donneur.model';
import { DonneurService } from 'src/app/services/donneur.service';

@Component({
  selector: 'app-donneur-ajouter',
  templateUrl: './donneur-ajouter.component.html',
  styles: [
  ]
})
export class DonneurAjouterComponent implements OnInit {

  formDonneur = new FormGroup({
    nom: new FormControl('', [Validators.required]),
    prenom: new FormControl('Vincent'),
    centreId: new FormControl('', [Validators.required])
  });

  centres = [
    { nom: 'Mulhouse', centreId: 1 },
    { nom: 'Paris', centreId: 2 },
    { nom: 'Marseille', centreId: 3 }
  ];

  constructor(private servDon: DonneurService, private snack: MatSnackBar) { }

  ngOnInit(): void {
  }

  submit(): void {
    console.log(this.formDonneur);
    if (this.formDonneur.valid) {
      //enregistrement
      this.servDon.ajouterDonneur(this.formDonneur.value as DonneurModel).subscribe(
        data => {
          this.snack.open(`Le donneur ${this.formDonneur.value.nom} est enregistré.`, 'OK', { duration: 4000, verticalPosition: 'top', horizontalPosition: 'center' });
        },
        err => alert(err.message)
      )
    }
  }

}
