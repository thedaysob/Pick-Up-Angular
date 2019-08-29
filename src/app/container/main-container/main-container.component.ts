import { Component, OnInit, Input } from '@angular/core';
import { GeoLocationService } from '../../service/geo-location.service'
import { PickUpInfo } from '../../model/pick-up-info'

@Component({
  selector: 'app-main-container',
  templateUrl: './main-container.component.html',
  styleUrls: ['./main-container.component.scss']
})
export class MainContainerComponent implements OnInit {
  coordinates: any;
  pickUpInfo : PickUpInfo;
  markerPlaced : boolean = true;

  constructor(public geoLocationService: GeoLocationService) { }

  ngOnInit() {
    this.geoLocationService.getPosition().subscribe(
      (pos: Position) => {
        this.coordinates = {
          latitude: pos.coords.latitude,
          longitude: pos.coords.longitude
        };
      });
  }

  onNewInfo($event : PickUpInfo) {
    console.log("submitted");
    this.markerPlaced = false;
    this.pickUpInfo = $event;
  }

  onMarkerPlaced($event : boolean) {
    this.markerPlaced = true;
  }
}
