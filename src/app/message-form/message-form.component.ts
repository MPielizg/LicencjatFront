import { Component } from '@angular/core';

import { MessageFormService } from '../service/message-form.service';

@Component({
    moduleId: module.id,
    selector: 'message-form',
    templateUrl: 'message-form.component.html',
    styleUrls: ['message-form.component.css']
})
export class MessageFormComponent {

    login: string;
    message: string;

    constructor(
        private service: MessageFormService
    ) {}

    sendMessage(e) {
        this.login = e.target.elements[0].value;
        this.message = e.target.elements[1].value;
        this.message = "".concat(this.login, "#", this.message);
        debugger;
        this.service.sendMessage(this.message);
    }
}
