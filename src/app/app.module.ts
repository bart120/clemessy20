import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { DonneurModule } from './pages/donneur/donneur.module';
import { RouterModule } from '@angular/router';
import { APP_ROUTES } from './app.routes';
import { MaterialModule } from './material.module';
import { DonneurService } from './services/donneur.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(APP_ROUTES),
    BrowserAnimationsModule,
    MaterialModule,
    DonneurModule,
    HttpClientModule
  ],
  providers: [
    //DonneurService,
    //{provide: DonneurService, useClass: DonneurService}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
