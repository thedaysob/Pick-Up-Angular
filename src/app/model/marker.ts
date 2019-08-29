import { PickUpInfo } from './pick-up-info'
import { Coordinates } from './coordinates'

export class Marker {
    gameID : string;
    coords = new Coordinates();
    pickUpInfo : PickUpInfo;

    constructor(lat : number, lng : number, info : PickUpInfo, gameID : string) {
        this.gameID = gameID;
        this.coords.lat = lat;
        this.coords.lng = lng;
        this.pickUpInfo = info;
    }
}
