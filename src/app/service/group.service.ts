import { Group } from '../model/group';
import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class GroupService {
  private headers = new Headers({'Content-Type': 'application/json'});
  private groupsUrl = 'http://localhost:8080/group';
  public group: Group;

  constructor(private http: Http) { }
  
  getGroups(name: String): Observable<Group[]> {
    return this.http.get(`${this.groupsUrl}/${name}`)
      .map(this.mapGroups);
  }
  
  mapGroups(response: Response): Group[] {
    return response.json();
  }

}
