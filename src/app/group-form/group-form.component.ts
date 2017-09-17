import { Component, OnInit } from '@angular/core';

import { SubjectService } from '../service/subject.service';
import { LoginFormService } from '../service/login-form.service';
import { GroupService } from '../service/group.service';
import { UserService } from '../service/user.service';
import { GroupCustomService } from '../service/group-custom.service';

import { GroupCustom } from '../model/group-custom';
import { User } from '../model/user';
import { Group } from '../model/group';

@Component({
    moduleId: module.id,
    selector: 'group-form',
    templateUrl: 'group-form.component.html',
    styleUrls: ['group-form.component.css', '../group/group.component.css', '../user/user.component.css']
})
export class GroupFormComponent implements OnInit {
    groupCustom: GroupCustom;
    users: User[];
    groups: Group[];
    index: number;

    constructor(
        private subjectService: SubjectService,
        private loginService: LoginFormService,
        private groupService: GroupService,
        private userService: UserService,
        private groupCustomService: GroupCustomService
    ) {}

    ngOnInit() {
        this.getGroups();
        this.getUsers();
        this.groupCustom = new GroupCustom();
        this.groupCustom.userDTOs = new Array<User>();
        this.groupCustom.groupDTOs = new Array<Group>();
    }

    addCustomGroup(e) {
        this.groupCustom.name = e.target.elements[0].value;
        this.groupCustom.login = e.target.elements[1].value;
        this.groupCustom.subjectDTO = this.subjectService.selectedSubject;
        this.groupCustom.createdBy = this.loginService.getUserName();
        this.groupCustomService.createCustomGroup(this.groupCustom);
    }

    onSelectUser(user: User): void {
        debugger;
        if(!this.groupCustom.userDTOs.includes(user)){
            debugger;
            this.groupCustom.userDTOs.push(user);
        }
    }

    onSelectGroup(group: Group): void{
        if(!this.groupCustom.groupDTOs.includes(group)){
            this.groupCustom.groupDTOs.push(group);
        }
    }

    deleteUser(user: User): void {
        if(this.groupCustom.userDTOs.includes(user)){
            this.index = this.groupCustom.userDTOs.indexOf(user);
            debugger;
            this.groupCustom.userDTOs.splice(this.index, 1);
        }
    }

    deleteGroup(group: Group): void {
        if(this.groupCustom.groupDTOs.includes(group)){
            this.index = this.groupCustom.groupDTOs.indexOf(group);
            this.groupCustom.groupDTOs.splice(this.index, 1);
        }
    }

    getGroups(): void {
        this.groupService.getGroups(this.subjectService.name).subscribe(groups => this.groups = groups);
    }

    getUsers(): void {
        this.userService
        .getUsers().subscribe(users => this.users = users);
    }

    showSelectedUsers(groupCustom: GroupCustom): User[] {
        return groupCustom.userDTOs;
    }

}
