import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/forkJoin';

@Injectable()
export class LoginFormService {

  private usersUrl = 'http://localhost:8080/usersAuth';
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
    localStorage.setItem('loggedUser', name);
  }
  
  getUserLoggedIn(): boolean {
    return this.isUserLoggedIn;
  }

  logout(): void {
    this.isUserLoggedIn = false;
    localStorage.removeItem('loggedUser');
  }

}
