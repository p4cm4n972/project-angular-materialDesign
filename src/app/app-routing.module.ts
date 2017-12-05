import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PartenaireComponent } from './partenaire/partenaire.component';
import { SocieteComponent } from './societe/societe.component';
import { CompetenceComponent } from './competence/competence.component';
import { ProduitComponent } from './produit/produit.component';
import { ProduitDetailComponent } from './produit-detail/produit-detail.component';
import { PartenaireDetailComponent } from './partenaire-detail/partenaire-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'partenaires', component: PartenaireComponent },
  { path: 'partenaires/:page', component: PartenaireDetailComponent },
  { path: 'societe', component: SocieteComponent },
  { path: 'competence', component: CompetenceComponent },
  { path: 'produit', component: ProduitComponent },
  { path: 'produit/:page', component: ProduitDetailComponent }
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
