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
    history: History[];

    constructor(
        private service: HistoryService
    ) {}

    getHistory(): void {
        this.service.getHistory().subscribe(history => this.history = history);
    }
}
