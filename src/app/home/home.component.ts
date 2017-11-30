import { Component, OnInit } from '@angular/core';

import { PartenaireService } from '../partenaire.service';
import { IPartenaire } from '../partenaire';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  errorMessage: string;
  partList: IPartenaire[] = [];

  constructor(private _partenaireService: PartenaireService) { }

  ngOnInit(): void {
    this._partenaireService.getPartenaire()
    .subscribe( partlist => {
      this.partList = partlist;
    },
  error => this.errorMessage = <any>error);
  }

}
