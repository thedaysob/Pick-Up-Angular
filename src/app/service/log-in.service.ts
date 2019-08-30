import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http'

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
    let params = new HttpParams();
    params = params.append('username', username);
    params = params.append('password', password);
    console.log(username);
    return this.http.get<User>('http://localhost:3000/Users/', { params : params });
  }
}
