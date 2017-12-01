import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { InfoMairiePage } from './infoMairie/infoMairie';
import { NumerosPage } from './numeros/numeros';
import { EquipePage } from './equipe/equipe';

import { MairieService } from '../../services/mairie.service';

@Component({
  selector: 'page-infos',
  templateUrl: 'infos.html'
})
export class InfosPage {

tabMairie = new Array;

  constructor(public navCtrl: NavController, private mairie: MairieService) {

    this.mairie.getData().subscribe((data) => {
        this.tabMairie = data;
    });
  }
    goInfoMairie(item) {
      this.navCtrl.push(InfoMairiePage, {
        mairie: item
      });
    }

    goEquipe(item) {
      this.navCtrl.push(EquipePage, {
        mairie: item
      });
    }
        
    goNumeros(item) {
      this.navCtrl.push(NumerosPage, {
        mairie: item
      });
    }
}
