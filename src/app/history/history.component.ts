import { Component } from '@angular/core';
import { History } from '../model/history';

import { HistoryService } from '../service/history-service';

@Component({
    moduleId: module.id,
    selector: 'history',
    templateUrl: './history.component.html',
    styleUrls: ['./history.component.css']
})
export class HistoryComponent {
    selectedHistory: History;
    historyitems: History[];
    index: number;
    startDate: Date;
    endDate: Date;

    constructor(
        private service: HistoryService
    ) {}

    getHistory(startDate: Date, endDate: Date): void {
        debugger;
        this.service.getHistory(this.startDate, this.endDate).subscribe(history => this.historyitems = history);
    }

    onSelect(history: History): void {
        this.selectedHistory = history;
    }

    delete(history: History): void {
        this.service.deleteHistoryItem(history.id).subscribe(result => console.log(result));
        this.index = this.historyitems.indexOf(history);
        this.historyitems.splice(this.index, 1);
    }

    setValue(e) {
        this.startDate = e.target.elements[0].value;
        this.endDate = e.target.elements[1].value;
        debugger;
        this.getHistory(this.startDate, this.endDate);
    }
}
