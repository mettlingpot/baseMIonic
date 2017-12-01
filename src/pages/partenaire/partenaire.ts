import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { AnnonceurService } from '../../services/annonceurs.service';
import { InfoPubPage } from '../../pages/infoPub/infoPub';

@Component({
  selector: 'page-partenaire',
  templateUrl: 'partenaire.html'
})
export class PartenairePage {

tabAnnonceurs = new Array;
annonceurPub = new Array;

  constructor(public navCtrl: NavController, private annonceur: AnnonceurService) {

    this.annonceur.getData("annonceurs").subscribe((data) => {
        this.tabAnnonceurs = data;
        this.annonceurPub[0] = this.tabAnnonceurs[2];
        console.log(this.annonceurPub);
    });        
  }
    itemTapped(item) {
      this.navCtrl.push(InfoPubPage, {
        annonceur: item
      });
    }
}
