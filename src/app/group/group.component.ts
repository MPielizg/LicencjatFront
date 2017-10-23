import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Group } from '../model/group';
import { Subject } from '../model/subject';
import { GroupCustom } from '../model/group-custom';

import { GroupService } from '../service/group.service';
import { SubjectService } from '../service/subject.service';
import { GroupCustomService } from '../service/group-custom.service';

import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.css']
})
export class GroupComponent implements OnInit {
  groups: Group[];
  selectedGroup: Group;
  customGroups: GroupCustom[];
  selectedGroupCustom: GroupCustom;
  @Input() subject: Subject;
  
  constructor(
    private groupService: GroupService,
    private router: Router,
    private route: ActivatedRoute,
    private subjectService: SubjectService,
    private groupCustomService: GroupCustomService
  ) { }
  
  getGroups(): void {
      this.groupService.getGroups(this.subjectService.name).subscribe(groups => this.groups = groups);
  }

  getCustomGroups(): void {
    this.groupCustomService.getGroupCustom(localStorage.getItem("loggedUser"), this.subjectService.name)
    .subscribe(customGroups => this.customGroups = customGroups);
  }
  
  onSelect(group: Group): void {
    this.selectedGroup = group;
    this.groupService.group = group;
    this.router.navigate(['/user-groups']);
  }

  onSelectCustom(groupCustom: GroupCustom): void {
    this.selectedGroupCustom = groupCustom;
    this.groupCustomService.groupCustom = groupCustom;
    this.router.navigate(['/group-custom']);
  }

  ngOnInit() {
    this.getGroups();
    this.getCustomGroups();
  }

}
