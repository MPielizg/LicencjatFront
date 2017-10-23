import { Injectable } from '@angular/core';
import { Http, Response, URLSearchParams } from '@angular/http';

import { LoginFormService } from './login-form.service'

import { GroupCustom } from '../model/group-custom'

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class GroupCustomService {

    private groupCustomUrl = 'http://localhost:8080/customgroup';
    public groupCustom: GroupCustom;
    
    constructor(
        private http: Http,
        private loginService: LoginFormService
    ) { }

    createCustomGroup(groupCustom: GroupCustom): Promise<GroupCustom> {
        return this.http.post(this.groupCustomUrl, groupCustom)
          .toPromise()
          .then(() => groupCustom)
          .catch(this.handleError);
    }

    getGroupCustom(login: string, name: string): Observable<GroupCustom[]> {
        let params: URLSearchParams = new URLSearchParams();
        params.set('login', login);
        params.set('name', name);
        return this.http.get(this.groupCustomUrl, {params: params})
        .map(this.mapCustomGroups);
    }

    mapCustomGroups(response: Response): GroupCustom[] {
        return response.json();
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
      }

}