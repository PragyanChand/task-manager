import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }
  getUser(username, password): Observable<any> {
    console.log(username + "   " + password);
    return this.http.get<any>("http://localhost:3000/user");
  }
}
