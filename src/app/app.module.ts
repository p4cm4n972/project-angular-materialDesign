import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

/**
 * MDB ANGULAR
 */
import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { HomeComponent } from './home/home.component';
import { PartenaireService } from './partenaire.service';
import { PartenaireComponent } from './partenaire/partenaire.component';
import { SocieteComponent } from './societe/societe.component';
import { CompetenceComponent } from './competence/competence.component';
import { ProduitComponent } from './produit/produit.component';
import { PanelpcComponent } from './panelpc/panelpc.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PartenaireComponent,
    SocieteComponent,
    CompetenceComponent,
    ProduitComponent,
    PanelpcComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MDBBootstrapModule.forRoot(),
    AppRoutingModule
  ],
  schemas: [ NO_ERRORS_SCHEMA ],
  providers: [PartenaireService],
  bootstrap: [AppComponent]
})
export class AppModule { }
