import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { InfoPubPage } from '../../../pages/infoPub/infoPub';

@Component({
  selector: 'page-equipe',
  templateUrl: 'equipe.html'
})
export class EquipePage {

public tabMairie;
tabAnnonceurs = new Array;
annonceurPub = new Array;

  constructor(public navCtrl: NavController,public navParams: NavParams) {

        this.tabMairie = navParams.get("mairie");
                
        this.tabAnnonceurs = navParams.get("annonceur");
        this.annonceurPub[0] = this.tabAnnonceurs[3];
        //console.log(this.annonceurPub);
    } 
    itemTapped(item) {
      this.navCtrl.push(InfoPubPage, {
        annonceur: item
      });
    } 
}