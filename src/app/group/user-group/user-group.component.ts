import { Location } from '@angular/common';

import { User } from '../../model/user';
import { GroupService } from '../../service/group.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-group',
  templateUrl: './user-group.component.html',
  styleUrls: ['./user-group.component.css']
})
export class UserGroupComponent implements OnInit {
  users: User[];
  selectedUser: User;
  
  constructor(
    private groupService: GroupService,
    private location: Location
  ) { }

  ngOnInit() {
    this.getUsers();
  }
  
  getUsers(): void {
    this.users = this.groupService.group.userDTOs;
  }
  
  delete(user: User): void {
//    this.userService
//        .deleteUser(user.phoneNumber)
//        .then(() => {
//          this.users = this.users.filter(u => u !== user);
//          if (this.selectedUser === user) { this.selectedUser = null; }
//        });
  }
  
  onSelect(user: User): void {
    this.selectedUser = user;
  }
  
  goBack() : void {
    this.location.back();
  }

}
