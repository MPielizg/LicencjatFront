import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class MessageFormService {
    private messageUrl = 'http://localhost:8080/getmessage/text/';
    
    constructor(
        private http: Http
    ) { }

    sendMessage(message: string): Promise<String> {
        return this.http.post(this.messageUrl, message)
        .toPromise()
        .then(() => message)
        .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
      }
}