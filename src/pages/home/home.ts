import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { AnnonceurService } from '../../services/annonceurs.service';
import { InfoPubPage } from '../../pages/infoPub/infoPub';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

tabAnnonceurs = new Array;
annonceurPub = new Array;

  constructor(public navCtrl: NavController, private annonceur: AnnonceurService) {

    this.annonceur.getData("annonceurs").subscribe((data) => {
        this.tabAnnonceurs = data;
        this.annonceurPub[0] = this.tabAnnonceurs[0];
        //console.log(this.annonceurPub);
    });        
  }
    itemTapped(item) {
      this.navCtrl.push(InfoPubPage, {
        annonceur: item
      });
    }
}