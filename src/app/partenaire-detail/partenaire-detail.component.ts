import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PartenaireService } from '../partenaire.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-partenaire-detail',
  templateUrl: './partenaire-detail.component.html',
  styleUrls: ['./partenaire-detail.component.scss']
})
export class PartenaireDetailComponent implements OnInit {
  errorMessage: string;
  partenaire;
  constructor( private _route: ActivatedRoute,
    private _router: Router,
    private _partenaireService: PartenaireService,
    private location: Location) { }

  ngOnInit() {
    console.log('INIT PART detail');
    let id = this._route.snapshot.paramMap.get('page');
    this.getPartenaireDetail(id);
  }

  getPartenaireDetail(id: string) {
    this._partenaireService.getPartenaireDetail(id)
    .subscribe(partenaire => this.partenaire = partenaire.partPrd,
    error => this.errorMessage = <any>error);
  }
  onBack(): void {
    this.location.back();
  }
}
