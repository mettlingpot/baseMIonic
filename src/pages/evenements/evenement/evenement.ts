import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { InfoPubPage } from '../../../pages/infoPub/infoPub';

@Component({
  selector: 'page-evenement',
  templateUrl: 'evenement.html'
})
export class EvenementPage {

public evenement;  
tabAnnonceurs = new Array;
annonceurPub = new Array;

  constructor(public navCtrl: NavController,public navParams: NavParams) {

        this.evenement = navParams.get("evenement");                
        this.tabAnnonceurs = navParams.get("annonceur");
        this.annonceurPub[0] = this.tabAnnonceurs[4];
        //console.log(this.annonceurPub);
    } 
    itemTapped(item) {
      this.navCtrl.push(InfoPubPage, {
        annonceur: item
      });
    } 
}