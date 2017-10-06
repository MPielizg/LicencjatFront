import { Component, OnInit } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'welcome',
    templateUrl: 'welcome.component.html',
    styleUrls: ['welcome.component.css']
})
export class WelcomeComponent implements OnInit {
    name: string;

    ngOnInit() {
        this.name = localStorage.getItem('loggedUser');
    }
}
