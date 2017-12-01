import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { InfoMairiePage } from './infoMairie/infoMairie';
import { NumerosPage } from './numeros/numeros';
import { EquipePage } from './equipe/equipe';
import { AnnonceurService } from '../../services/annonceurs.service';
import { InfoPubPage } from '../../pages/infoPub/infoPub';
import { MairieService } from '../../services/mairie.service';

@Component({
  selector: 'page-infos',
  templateUrl: 'infos.html'
})
export class InfosPage {

tabMairie = new Array;
tabAnnonceurs = new Array;
annonceurPub = new Array;

  constructor(public navCtrl: NavController, private mairie: MairieService, private annonceur: AnnonceurService)  {

    this.annonceur.getData("annonceurs").subscribe((data) => {
        this.tabAnnonceurs = data;
        this.annonceurPub[0] = this.tabAnnonceurs[1];
        //console.log(this.annonceurPub);
    });  
    this.mairie.getData().subscribe((data) => {
        this.tabMairie = data;
    });
  }
    goInfoMairie(item) {
      this.navCtrl.push(InfoMairiePage, {
        mairie: item,
        annonceur:this.tabAnnonceurs
      });
    }

    goEquipe(item) {
      this.navCtrl.push(EquipePage, {
        mairie: item,
        annonceur:this.tabAnnonceurs
      });
    }

    goNumeros(item) {
      this.navCtrl.push(NumerosPage, {
        mairie: item,
        annonceur:this.tabAnnonceurs
      });
    }
    itemTapped(item) {
      this.navCtrl.push(InfoPubPage, {
        annonceur: item
      });
    }
}
