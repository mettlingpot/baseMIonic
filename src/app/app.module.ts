import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
// pages
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { InfosPage } from '../pages/infos/infos';
import { PartenairePage } from '../pages/partenaire/partenaire';
import { InfoPubPage } from '../pages/infoPub/infoPub';
import { EvenementsPage } from '../pages/evenements/evenements';
import { MapPage } from '../pages/map/map';

import { EvenementPage } from '../pages/evenements/evenement/evenement';
import { InfoMairiePage } from '../pages/infos/infoMairie/infoMairie';
import { NumerosPage } from '../pages/infos/numeros/numeros';
import { EquipePage } from '../pages/infos/equipe/equipe';



// services
import { AnnonceurService } from '../services/annonceurs.service';
import { MairieService } from '../services/mairie.service';
import { EvenementsService } from '../services/evenements.service';


import { HttpModule } from "@angular/http";

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    InfosPage,
    PartenairePage,
    EvenementsPage,
    EvenementPage,
    MapPage,
    InfoMairiePage,
    InfoPubPage,
    EquipePage,
    NumerosPage
  ],
  imports: [
    HttpModule,
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    InfosPage,
    PartenairePage,
    EvenementsPage,
    EvenementPage,
    MapPage,
    InfoMairiePage,
    InfoPubPage,
    EquipePage,
    NumerosPage
  ],
  providers: [
    HttpModule,
    EvenementsService,
    AnnonceurService,
    MairieService,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
