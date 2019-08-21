import { Component, OnInit, OnChanges, Input, Output, EventEmitter } from '@angular/core';
import { Marker } from '../model/marker';
import { PickUpInfo } from '../model/pick-up-info'

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit, OnChanges {
  @Input() coords : any;
  @Input() pickUpInfo : PickUpInfo;
  @Output() markerPlaced = new EventEmitter<boolean>();
  
  markers: Array<Marker> = [];

  constructor() { 
  }

  ngOnInit() {
  }

  ngOnChanges() {
    if (this.coords == undefined) {
      this.coords.latitude = 0;
      this.coords.longitude = 0;
    }
  }

  mapDblClicked($event: any) {
    console.log($event);
    let currMark = new Marker;
    currMark.lat = $event.coords.lat;
    currMark.lng = $event.coords.lng;
    currMark.pickUpInfo = this.pickUpInfo;
    this.markers.push(currMark);
    this.markerPlaced.emit(true);
  }

  clickedMarker(index: number) {
    console.log(this.markers[index]);
  }

}
