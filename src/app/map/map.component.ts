import { Component, OnInit, OnChanges, Input } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit, OnChanges {
  @Input() coords : any;

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

}
