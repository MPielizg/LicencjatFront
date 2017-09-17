import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Subject } from '../model/subject';
import { Group } from '../model/group';
import { SubjectService } from '../service/subject.service';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.css']
})
export class SubjectComponent implements OnInit {
  subjects: Subject[];
  public selectedSubject: Subject;
  public groups: Group[];
  
  constructor(
    private subjectService: SubjectService,
    private router: Router
  ) { }
  
  getSubjects(): void {
    this.subjectService.getSubjects().subscribe(subjects => this.subjects = subjects);
  }
  
  getSubject(): Subject {
    return this.selectedSubject;
  }
  
  onSelect(subject: Subject): void {
    this.selectedSubject = subject;
    this.subjectService.selectedSubject = this.selectedSubject;
    this.subjectService.name = this.selectedSubject.name;
    this.router.navigate(['/groups']);
  }
  
  ngOnInit() {
    this.getSubjects();
  }

}
