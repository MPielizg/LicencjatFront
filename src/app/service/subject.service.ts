import { Subject } from '../model/subject';
import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class SubjectService {

  private headers = new Headers({'Content-Type': 'application/json'});
  private subjectsUrl = 'http://localhost:8080/subject';
  name: string;
  selectedSubject: Subject;
  
  constructor(private http: Http) { }
  
  getSubjects(): Observable<Subject[]> {
    return this.http.get(this.subjectsUrl)
      .map( this.mapSubjects );
  }
  
  mapSubjects(response: Response): Subject[] {
    return response.json().content;
  }

}
