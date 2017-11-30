import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PartenaireComponent } from './partenaire/partenaire.component';
import { SocieteComponent } from './societe/societe.component';
import { CompetenceComponent } from './competence/competence.component';
import { ProduitComponent } from './produit/produit.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent },
  { path: 'partenaires', component: PartenaireComponent },
  { path: 'societe', component: SocieteComponent },
  { path: 'competence', component: CompetenceComponent },
  { path: 'produit', component: ProduitComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
