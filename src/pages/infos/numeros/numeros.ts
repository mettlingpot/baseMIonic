import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-numeros',
  templateUrl: 'numeros.html'
})
export class NumerosPage {

public tabMairie;

  constructor(public navCtrl: NavController,public navParams: NavParams) {

        this.tabMairie = navParams.get("mairie");
  }

}
