import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http'

import { Marker } from '../model/marker'

@Injectable({
  providedIn: 'root'
})
export class LocationDataService {

  constructor( private http: HttpClient ) { }

  getAllLocations(): Observable<Marker[]> {
    return this.http.get<Marker[]> ('http://localhost:3000/Locations');
  } 

  insertLocation(marker : Marker): Observable<String> { 
    return this.http.post<String> ('http://localhost:3000/Locations/', marker);
  }

  addNumber(marker : Marker): Observable<any> {
    marker.pickUpInfo.numOfPlayers = Number(marker.pickUpInfo.numOfPlayers) + 1;
    return this.http.put('http://localhost:3000/join/Locations' + "/" + marker.gameID, marker);    
  }

  subtractNumer(marker : Marker) : Observable<any>{
    marker.pickUpInfo.numOfPlayers = Number(marker.pickUpInfo.numOfPlayers) - 1;
    return this.http.put('http://localhost:3000/leave/Locations' + "/" + marker.gameID, marker);    
  }
}
