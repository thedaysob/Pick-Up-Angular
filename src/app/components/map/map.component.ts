import { Component, OnInit, OnChanges, Input, Output, EventEmitter } from '@angular/core';
import { Marker } from '../../model/marker';
import { PickUpInfo } from '../../model/pick-up-info';
import { Coordinates } from '../../model/coordinates';
import { LocationDataService } from '../../service/location-data.service';
import { UUID } from 'angular2-uuid';

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

  constructor(private locationDataService : LocationDataService) { }

  ngOnInit() {
    this.locationDataService.getAllLocations().subscribe((response)=>{
      this.markers = response;
    });
  }

  ngOnChanges() {
    if (this.coords == undefined) {
      this.coords.latitude = 0;
      this.coords.longitude = 0;
    }
  }

  mapDblClicked($event: any) {
    let uuid = UUID.UUID();
    let currMark = new Marker($event.coords.lat, $event.coords.lng, this.pickUpInfo, uuid);
    this.markers.push(currMark);
    this.markerPlaced.emit(true);

    this.locationDataService.insertLocation(currMark).subscribe((response)=>{
      console.log(response);
    }, (error)=>{
      console.log(error);
    });
  }

  clickedMarker(index: number) {
    console.log(this.markers[index]);
  }

  joinGame(marker : Marker) {
    this.locationDataService.addNumber(marker).subscribe((response)=>{
      console.log(response);
    }, (error)=>{
      console.log(error);
    });
  }

  leaveGame(marker : Marker) {
    this.locationDataService.subtractNumer(marker).subscribe((response)=>{
      console.log(response);
    }, (error)=>{
      console.log(error);
    });
  }
}
