import { LoginFormService } from './service/login-form.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private service: LoginFormService,
    private router: Router
  ) {}
  
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean
    {
    if(localStorage.getItem('loggedUser')){
      return true;
    } else {
      this.router.navigate(['login']);
      return false;
    }
  }
}