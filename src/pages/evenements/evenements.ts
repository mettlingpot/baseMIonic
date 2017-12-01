import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { EvenementsService } from '../../services/evenements.service';
import { EvenementPage } from './evenement/evenement';
import { AnnonceurService } from '../../services/annonceurs.service';
import { InfoPubPage } from '../../pages/infoPub/infoPub';

@Component({
  selector: 'page-evenements',
  templateUrl: 'evenements.html'
})
export class EvenementsPage {

tabEvenements = new Array;
tabAnnonceurs = new Array;
annonceurPub = new Array;

  constructor(public navCtrl: NavController, private annonceur: AnnonceurService, private evenement: EvenementsService)  {

    this.annonceur.getData("annonceurs").subscribe((data) => {
        this.tabAnnonceurs = data;
        this.annonceurPub[0] = this.tabAnnonceurs[5];
        //console.log(this.annonceurPub);
    });  
    this.evenement.getData().subscribe((data) => {
        this.tabEvenements = data;
    });
    
  }
    itemTapped(item) {
      this.navCtrl.push(EvenementPage, {
        evenement: item,
        annonceur: this.tabAnnonceurs
      });
    }

    pubTapped(item) {
      this.navCtrl.push(InfoPubPage, {
        annonceur: item
        });
    }
}
