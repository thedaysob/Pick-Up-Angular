import { Component, OnInit, Output, NgZone } from '@angular/core';
import { MapsAPILoader } from '@agm/core';
import { GoogleMapsAPIWrapper } from '@agm/core/services';

declare var google: any;

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {
  geocoder: any;
  zipCode: number;
  // @Output() zipCode = newEventEmitter<;

  constructor(
    private mapsAPILoader : MapsAPILoader,
    private zone : NgZone,
    private wrapper : GoogleMapsAPIWrapper
  ) { 
    this.zone = zone;
    this.wrapper = wrapper;
    this.mapsAPILoader.load().then(() => {
      this.geocoder = new google.maps.Geocoder();
    })
  }

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.zipCode);
  }
  
  findLocation(zipCode) {
    if (!this.geocoder) {
      this.geocoder = new google.maps.Geocoder();
    }
    this.geocoder.geocode({
      
    })
  } 

}
