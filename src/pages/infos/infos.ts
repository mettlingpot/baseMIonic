import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { MairieService } from '../../services/mairie.service';

@Component({
  selector: 'page-infos',
  templateUrl: 'infos.html'
})
export class InfosPage {

tabMairie = new Array;

  constructor(public navCtrl: NavController, private annonceur: MairieService) {

    this.annonceur.getData().subscribe((data) => {
        this.tabMairie = data;
    });
  }

}
