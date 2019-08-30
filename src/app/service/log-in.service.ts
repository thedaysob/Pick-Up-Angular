import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http'

import { User, UserInfo } from '../model/user'

@Injectable({
  providedIn: 'root'
})
export class LogInService {

  constructor( private http: HttpClient ) { }

  createNewUser(user : User): Observable<any> {
    return this.http.post<String> ('http://localhost:3000/Users/', user);
  }

  getUser(username : string, password : string): Observable<any> {
    let params = new HttpParams();
    params = params.append('username', username);
    params = params.append('password', password);
    console.log(username);
    return this.http.get<any>('http://localhost:3000/Users/', { params : params });
  }
}
