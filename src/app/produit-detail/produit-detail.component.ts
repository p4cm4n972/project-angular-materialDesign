import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


import { IProduit } from '../produit/produit';
import { ProduitService } from '../produit.service';

@Component({
  selector: 'app-produit-detail.component',
  templateUrl: './produit-detail.component.html',
  styleUrls: ['./produit-detail.component.scss'],
  providers: [ ProduitService ]
})
export class ProduitDetailComponent implements OnInit {
  errorMessage: string;
  produit;

  constructor( private _route: ActivatedRoute,
    private _router: Router,
    private _produitService: ProduitService) { }

  ngOnInit() {

    console.log('INIT detail');
    let id = this._route.snapshot.paramMap.get('page');
    this.getProduitList(id);

  }
    getProduitList(id: string) {
      this._produitService.getProduitList(id).subscribe(
        produit => this.produit = produit.article,
        error => this.errorMessage = <any>error);
    }
    onBack(): void {
      this._router.navigate(['/produit']);
    }
  }

