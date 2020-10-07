import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { DonneurListComponent } from './donneur-list/donneur-list.component';
import { MaterialModule } from 'src/app/material.module';
import { RouterModule } from '@angular/router';
import { DonneurDetailComponent } from './donneur-detail/donneur-detail.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DonneurAjouterComponent } from './donneur-ajouter/donneur-ajouter.component';


@NgModule({
  declarations: [
    FooterComponent,
    DonneurListComponent,
    DonneurDetailComponent,
    DonneurAjouterComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatGridListModule,
    MatCardModule,
    MaterialModule,
    RouterModule
  ],
  exports: [
    FooterComponent
  ]
})
export class DonneurModule { }
