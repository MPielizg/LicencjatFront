import { Component, OnInit } from '@angular/core';
import { History } from '../model/history';

import { HistoryService } from '../service/history-service';

@Component({
    moduleId: module.id,
    selector: 'history',
    templateUrl: './history.component.html',
    styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {
    selectedHistory: History;
    historyitems: History[];
    index: number;

    constructor(
        private service: HistoryService
    ) {}

    ngOnInit() {
        this.getHistory();
    }

    getHistory(): void {
        this.service.getHistory().subscribe(history => this.historyitems = history);
    }

    onSelect(history: History): void {
        this.selectedHistory = history;
    }

    delete(history: History): void {
        this.service.deleteHistoryItem(history.id);
        this.index = this.historyitems.indexOf(history);
        this.historyitems.splice(this.index, 1);
    }
}
