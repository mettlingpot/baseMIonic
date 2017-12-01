import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AnnonceurService } from '../../services/annonceurs.service';
import { MairieService } from '../../services/mairie.service';
import { InfoPubPage } from '../../pages/infoPub/infoPub';


declare var google: any;
var tabAnnonceurs = new Array;
var tabMairie = new Array;
var map;

  @Component({
    selector: 'page-map',
    templateUrl: 'map.html'
  })
  export class MapPage {
    
@ViewChild('map') mapRef: ElementRef;

  constructor(public navCtrl: NavController, private annonceur: AnnonceurService, private mairie:MairieService){
        this.annonceur.getData("annonceurs").subscribe((data) => {
            tabAnnonceurs = data;
        });
        this.mairie.getData().subscribe((data) => {
        tabMairie = data;

        this.showMap();
        });
    }

    ionViewDidLoad() {}

    showMap(){    

            const location = new google.maps.LatLng( "44.397554", "4.882565999999997");
            const options ={
                    center: location,
                    zoom:10
            }
            map = new google.maps.Map(this.mapRef.nativeElement,options);
            this.addMarkerMairie(new google.maps.LatLng( "44.397554", "4.882565999999997"), map);


        for (let pub of tabAnnonceurs){
            console.log(pub.title);
            this.addMarkerPartenaire(new google.maps.LatLng(pub.Lat,pub.Lng), map,pub);
        }

    }

    addMarkerMairie(position,map){
    
        var contentString = '<div id="+mairie.id+">'+
            '<div id="siteNotice">'+
            '</div>'+'<img src="./assets/imgs/mairie.jpg"></img>'+
            '<h1 id="firstHeading" class="firstHeading">MaVille</h1>'+
            '<div id="bodyContent">'+
            '<p><b>MaVille, </b>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>'+
            '<p><a href="http://www.maville.fr">'+
            'http://www.maville.fr</a> '+'</p>'+
            '</div>'+
            '</div>';
        var infoWindow = new google.maps.InfoWindow({
        content: contentString
        }); 
    
        var marker = new google.maps.Marker({
            position,
            map,
            title: "title",
            label: "maVille",
        })
        //click de l'infowindow
        marker.addListener('click',function(){ infoWindow.open(map,marker)});
    }

    addMarkerPartenaire(position,map,pub){

        var contentString = '<div id="'+pub.id+'">'+
            '<div id="siteNotice">'+
            '</div>'+'<img src="'+pub.photoUrl+'"></img>'+
            '<h1 id="firstHeading" class="firstHeading"></h1>'+
            '<div id="bodyContent">'+
            '<p><b>'+pub.title+', </b>'+pub.content+'</p>'+
            '<p><a href="'+pub.siteWeb+'">'+
            ''+pub.siteWeb+'</a> '+'</p>'+
            '</div>'+
            '</div>';
        var infoWindow = new google.maps.InfoWindow({
        content: contentString
        }); 
    
        var marker = new google.maps.Marker({
            position,
            map,
            title: pub.title,
            label: pub.title,
        })
        //click de l'infowindow
        marker.addListener('click',function(){ infoWindow.open(map,marker)});

        //click du lien vers la page de l'annonceur
        google.maps.event.addListenerOnce(infoWindow, 'domready', () => {
        document.getElementById(pub.id).addEventListener('click', () => {
        this.goInfoPub(pub);
        });
        });
    }

    goInfoPub(pub)
    {
        this.navCtrl.push(InfoPubPage, {
        annonceur: pub
      });
    }

}