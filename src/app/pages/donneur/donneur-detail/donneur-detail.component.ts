import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { DonneurModel } from 'src/app/models/donneur.model';
import { DonneurService } from 'src/app/services/donneur.service';

@Component({
  selector: 'app-donneur-detail',
  templateUrl: './donneur-detail.component.html',
  styles: [
  ]
})
export class DonneurDetailComponent implements OnInit {

  obsDonneur$: Observable<DonneurModel>;

  constructor(private route: ActivatedRoute, private servDon: DonneurService) { }

  ngOnInit(): void {
    const id = this.route.snapshot.params.id;
    this.obsDonneur$ = this.servDon.getDonneurById(id);

  }

}
