import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Group } from '../model/group';
import { Subject } from '../model/subject';
import { GroupService } from '../service/group.service';
import { SubjectService } from '../service/subject.service';

import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.css']
})
export class GroupComponent implements OnInit {
  groups: Group[];
  selectedGroup: Group;
  @Input() subject: Subject;
  
  constructor(
    private groupService: GroupService,
    private router: Router,
    private route: ActivatedRoute,
    private subjectService: SubjectService
  ) { }
  
  getGroups(): void {
      this.groupService.getGroups(this.subjectService.name).subscribe(groups => this.groups = groups);
    }
  
  onSelect(group: Group): void {
    this.selectedGroup = group;
    this.groupService.group = group;
    this.router.navigate(['/user-groups']);
  }

  ngOnInit() {
    this.getGroups();
  }
  
  delete(group: Group): void {}

}
