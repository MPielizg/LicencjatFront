import { User } from '../model/user';
import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class UserService {
  
  private headers = new Headers({'Content-Type': 'application/json'});
  private usersUrl = 'http://localhost:8080/users';
  
  constructor(private http: Http) { }
  
  getUsers(): Observable<User[]> {
    return this.http.get(this.usersUrl)
      .map(this.mapUser);
  }
  
  mapUser(response:Response): User[] {
    return response.json().content;
  }
  
  getUser(id: number): Promise<User> {
    const url = `${this.usersUrl}/${id}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json().data as User)
      .catch(this.handleError);
  }
  
  deleteUser(phoneNumber: number): Promise<void> {
    const url = `${this.usersUrl}/${phoneNumber}`;
    return this.http.delete(url, {headers: this.headers})
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }
  
  createUser(user: User): Promise<User> {
    return this.http.post(this.usersUrl, user)
      .toPromise()
      .then(() => user)
      .catch(this.handleError);
  }
  
  update(user: User): Promise<User> {
    const url = `${this.usersUrl}/${user.phoneNumber}`;
    return this.http
      .put(url, JSON.stringify(User), {headers: this.headers})
      .toPromise()
      .then(() => user)
      .catch(this.handleError);
  }
  
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

}
