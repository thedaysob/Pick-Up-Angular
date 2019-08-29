import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http'

import { User } from '../model/user'

@Injectable({
  providedIn: 'root'
})
export class LogInService {

  constructor( private http: HttpClient ) { }

  createNewUser(user : User): Observable<any> {
    return this.http.post<String> ('http://localhost:3000/Users/', user);
    
  }

  getUser(username : string, password : string): Observable<User> {
    return this.http.get<User>('http://localhost:3000/Users/' + username);
  }
}
