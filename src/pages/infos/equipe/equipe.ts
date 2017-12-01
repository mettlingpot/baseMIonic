import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-equipe',
  templateUrl: 'equipe.html'
})
export class EquipePage {

public tabMairie;

  constructor(public navCtrl: NavController,public navParams: NavParams) {

        this.tabMairie = navParams.get("mairie");
  }

}
