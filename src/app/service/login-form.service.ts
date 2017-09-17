import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class LoginFormService {

  private usersUrl = 'http://localhost:8080/usersAuth';
  private userName: string;
  private isUserLoggedIn = false;
  
  constructor(
    private http: Http
  ) { }
  
  getPassword(login: string): Observable<string> {
    return this.http.post(this.usersUrl, login).map(this.mapString);
  }
  
  mapString(response: Response): string {
    return response.text();
  }
  
  setUserLoggedIn(name: string) {
    this.isUserLoggedIn = true;
    this.userName = name;
  }
  
  getUserLoggedIn(): boolean {
    return this.isUserLoggedIn;
  }

  getUserName(): string {
    return this.userName;
  }

}
