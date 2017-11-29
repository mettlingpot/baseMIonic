import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController } from 'ionic-angular';

declare var google: any;

  @Component({
    selector: 'page-map',
    templateUrl: 'map.html'
  })
  export class MapPage {
    
    @ViewChild('map') mapRef: ElementRef;
    constructor(public navCtrl: NavController) {

    }

    ionViewDidLoad() {
      this.showMap();
      console.log(this.mapRef);
    }

    showMap(){
        const location = new google.maps.LatLng(44.397554,4.882565999999997);
        
        const options ={
            center: location,
            zoom:9
        }

        const map = new google.maps.Map(this.mapRef.nativeElement,options);
        this.addMarker(new google.maps.LatLng(44.397554,4.7725) , map);

    }
    
    addMarker(position,map){
    
      return new google.maps.Marker({
        position,
        map,
        title:"test",
        label: "test" });
    }

}