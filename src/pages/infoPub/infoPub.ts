import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-infoPub',
  templateUrl: 'infoPub.html'
})
export class InfoPubPage {

public annonceur;

  constructor(public navCtrl: NavController,public navParams: NavParams) {

        this.annonceur = navParams.get("annonceur");
  }

}
