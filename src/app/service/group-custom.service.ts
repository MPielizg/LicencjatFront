import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { LoginFormService } from './login-form.service'

import { GroupCustom } from '../model/group-custom'

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class GroupCustomService {

    private usersUrl = 'http://localhost:8080/customgroup';
    
    constructor(
        private http: Http,
        private loginService: LoginFormService
    ) { }

    createCustomGroup(groupCustom: GroupCustom): Promise<GroupCustom> {
        return this.http.post(this.usersUrl, groupCustom)
          .toPromise()
          .then(() => groupCustom)
          .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
      }

}