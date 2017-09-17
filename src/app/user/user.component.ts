import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { User } from '../model/user';
import { UserService } from '../service/user.service';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  users: User[];
  selectedUser: User;

  constructor(
    private userService: UserService,
    private router: Router) { }
  
  getUsers(): void {
    this.userService
    .getUsers().subscribe(users => this.users = users);
  }
  
  add(user: User): void {
    if (!user) { return; }
    this.userService.createUser(user)
      .then(hero => {
        this.users.push(hero);
        this.selectedUser = null;
      });
  }
  
  delete(user: User): void {
    this.userService
        .deleteUser(user.phoneNumber)
        .then(() => {
          this.users = this.users.filter(u => u !== user);
          if (this.selectedUser === user) { this.selectedUser = null; }
        });
  }

  ngOnInit() {
    this.getUsers();
  }
  
  onSelect(user: User): void {
    this.selectedUser = user;
  }
  
  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedUser.phoneNumber]);
  }

}
