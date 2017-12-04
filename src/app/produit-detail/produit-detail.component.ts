import { Component, OnInit } from '@angular/core';

import { IProduit } from '../produit/produit';
import { PRODUIT } from '../produit/mock-produit';

@Component({
  templateUrl: './produit-detail.component.html',
  styleUrls: ['./produit-detail.component.scss']
})
export class ProduitDetailComponent implements OnInit {

  produit = PRODUIT;
  constructor() { }

  ngOnInit() {
  }

}
