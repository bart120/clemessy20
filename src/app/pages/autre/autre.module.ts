import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { IntrouvableComponent } from './introuvable/introuvable.component';



@NgModule({
  declarations: [HomeComponent, IntrouvableComponent],
  imports: [
    CommonModule
  ]
})
export class AutreModule { }
