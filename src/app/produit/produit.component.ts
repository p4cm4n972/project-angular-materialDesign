import { Component, OnInit } from '@angular/core';

import { ProduitService } from '../produit.service';


import { IProduit } from './produit';
import { PRODUIT } from './mock-produit';

@Component({
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.scss'],
  providers: [ ProduitService ]
})
export class ProduitComponent implements OnInit {

  errorMessage: string;
  produit = PRODUIT;
  constructor(private _produitService: ProduitService) { }

  ngOnInit() {
    this._produitService.getProduit()
    .subscribe(produit => {
      this.produit = produit;
    },
    error => this.errorMessage = <any>error);
  }
}
