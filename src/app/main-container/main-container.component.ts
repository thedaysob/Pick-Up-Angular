import { Component, OnInit, Input } from '@angular/core';
import { GeoLocationService } from '../service/geo-location.service'

@Component({
  selector: 'app-main-container',
  templateUrl: './main-container.component.html',
  styleUrls: ['./main-container.component.scss']
})
export class MainContainerComponent implements OnInit {
  coordinates: any;

  constructor(public geoLocationService: GeoLocationService) { }

  ngOnInit() {
    this.geoLocationService.getPosition().subscribe(
      (pos: Position) => {
        this.coordinates = {
          latitude: pos.coords.latitude,
          longitude: pos.coords.longitude
        };
        console.log(this.coordinates);
      });
  }
}
