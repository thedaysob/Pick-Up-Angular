import { Component, OnInit, Output, NgZone, EventEmitter, Input } from '@angular/core';
import { MapsAPILoader } from '@agm/core';
import { GoogleMapsAPIWrapper } from '@agm/core/services';
import { PickUpInfo } from '../model/pick-up-info'
import { AuthService } from '../service/auth.service'

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {
  sports : Array<String> = [];
  currName : string;
  currNumOfPlayers : number;
  currSport : string;

  @Output() newInfo = new EventEmitter<PickUpInfo>();
  @Input() markerPlaced : boolean;
  
  constructor(
    public auth: AuthService
  ) {
    this.sports.push('Basketball', 'Soccer', 'Ultimate Frisbee');

  }

  ngOnInit() {
  }

  onSubmit() {
    let currInfo = new PickUpInfo;
    currInfo.registerName = this.currName;
    currInfo.numOfPlayers = this.currNumOfPlayers;
    currInfo.typeOfSport = this.currSport;
    this.newInfo.emit(currInfo);
  }
}
