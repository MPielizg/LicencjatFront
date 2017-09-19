import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';

import { History } from '../model/history';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class HistoryService {
    private headers = new Headers({'Content-Type': 'application/json'});
    private hitoryUrl = 'http://localhost:8080/history';
    
    constructor(
        private http: Http
    ) { }

    getHistory(): Observable<History[]> {
        return this.http.get(`${this.hitoryUrl}/${localStorage.getItem('loggedUser')}`)
        .map(this.mapHistory);
    }

    mapHistory(response:Response): History[] {
        return response.json().content;
      }

}