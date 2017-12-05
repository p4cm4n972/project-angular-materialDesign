import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';

import { IProduit } from './produit/produit';


@Injectable()
export class ProduitService {
  private _produitUrl = '../api/produit/produit-list.json';

  constructor( private _http: HttpClient) { }

  getProduit(): Observable<IProduit[]> {
    return this._http.get<IProduit[]>(this._produitUrl)
    .do(data => console.log(data[0].article))
    .catch(this.handleError);
  }
  getProduitList(id: string): Observable<IProduit> {
    return this.getProduit()
    .map((produit: IProduit[]) => produit.find(p => p.page === id ))
    .do(data => console.log(data))
    .catch(this.handleError);
}

getProduitSeller(id: string): Observable<IProduit> {
  return this.getProduit()
  .map((produit: IProduit[]) => produit.find(p => p.page === id ))
}

  private handleError(err: HttpErrorResponse) {
    console.error(err.message);
    return Observable.throw(err.message);
  }

}
