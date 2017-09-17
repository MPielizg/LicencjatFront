import { LoginFormService } from '../service/login-form.service';

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  
  private userName: string;
  private password: string;
  private passwCheck: string;

  constructor(
    private router: Router,
    private service: LoginFormService
  ) { }

  ngOnInit() {
    if(!this.service.getUserLoggedIn){
      this.router.navigate(['']);
    }
  }
  
  loginUser(e) {
    this.userName = e.target.elements[0].value;
    this.password = e.target.elements[1].value;
    
    this.service.getPassword(this.userName).subscribe(passwCheck => this.passwCheck = passwCheck);
    console.log(this.passwCheck);
    debugger;
    if(this.password === this.passwCheck) {
      this.service.setUserLoggedIn(this.userName);
      this.router.navigate(['']);
    }
  }

}
