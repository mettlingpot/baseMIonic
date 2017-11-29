import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { EvenementsService } from '../../services/evenements.service';
import { EvenementPage } from './evenement/evenement';

@Component({
  selector: 'page-evenements',
  templateUrl: 'evenements.html'
})
export class EvenementsPage {

tabEvenements = new Array;

  constructor(public navCtrl: NavController, private evenement: EvenementsService) {

    this.evenement.getData().subscribe((data) => {
        this.tabEvenements = data;
    });
    
  }
      itemTapped(item) {
      this.navCtrl.push(EvenementPage, {
        evenement: item
      });
    }
}
