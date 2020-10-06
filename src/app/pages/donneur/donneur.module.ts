import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { DonneurListComponent } from './donneur-list/donneur-list.component';


@NgModule({
  declarations: [
    FooterComponent,
    DonneurListComponent
  ],
  imports: [
    CommonModule,
    MatGridListModule,
    MatCardModule
  ],
  exports: [
    FooterComponent
  ]
})
export class DonneurModule { }
