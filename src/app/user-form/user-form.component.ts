import { Component } from '@angular/core';
import { Location } from '@angular/common';

import { User } from '../model/user';
import { Group } from '../model/group';

import { UserService } from '../service/user.service';
import { LoginFormService } from '../service/login-form.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent {

  statuses = ['Student', 'Wykladowca'];
  groups: Group[];

  model = new User('', '', '', '', 0, '', '');

  submitted = false;
  
  constructor(
    private loginService: LoginFormService,
    private userService: UserService,
    private location: Location
  ) { }

  onSubmit() {
    this.submitted = true;
    if (!this.model) { return; }
    this.model.createdBy = localStorage.getItem('loggedUser');
    this.userService.createUser(this.model);
  }
  
  goBack() : void {
    this.location.back();
  }

}
