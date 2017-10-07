import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { History } from '../model/history';
import { Interval } from '../model/interval';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class HistoryService {
    private hitoryUrl = 'http://localhost:8080/history';
    private interval: Interval;

    constructor(
        private http: Http
    ) { }

    getHistory(startDate: Date, endDate: Date): Observable<History[]> {
        debugger;
        this.interval = new Interval(startDate.toString(), endDate.toString());
        return this.http.post(`${this.hitoryUrl}/${localStorage.getItem('loggedUser')}`, this.interval)
        .map(this.mapHistoryTab);
    }

    mapHistoryTab(response:Response): History[] {
        return response.json().content;
    }

    deleteHistoryItem(id: number): Observable<History> {
        return this.http.delete(`${this.hitoryUrl}/${id}`)
        .map(this.mapHistory);
    }

    mapHistory(response:Response): History {
        return response.json().content;
    }

}