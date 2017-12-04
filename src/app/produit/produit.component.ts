import { Component, OnInit } from '@angular/core';

import { IProduit } from './produit';
import { PRODUIT } from './mock-produit';

@Component({
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.scss']
})
export class ProduitComponent implements OnInit {


  produit = PRODUIT;
  constructor() { }

  ngOnInit() {
  }

}
