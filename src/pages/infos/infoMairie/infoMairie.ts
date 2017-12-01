import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-infoMairie',
  templateUrl: 'infoMairie.html'
})
export class InfoMairiePage {

public tabMairie;

  constructor(public navCtrl: NavController,public navParams: NavParams) {

        this.tabMairie = navParams.get("mairie");
  }

}
