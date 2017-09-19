import { Component } from '@angular/core';
import { History } from '../model/history';

import { HistoryService } from '../service/history-service';

@Component({
    moduleId: module.id,
    selector: 'history',
    templateUrl: 'history.component.html',
    styleUrls: ['history.component.css']
})
export class HistoryComponent {
    selectedHistory: History;
    historyItems: History[];
    index: number;

    constructor(
        private service: HistoryService
    ) {}

    getHistory(): void {
        this.service.getHistory().subscribe(history => this.historyItems = history);
    }

    onSelect(history: History): void {
        this.selectedHistory = history;
    }

    delete(history: History): void {
        this.delete(history);
        this.index = this.historyItems.indexOf(history);
        this.historyItems.splice(this.index, 1);
    }
}
