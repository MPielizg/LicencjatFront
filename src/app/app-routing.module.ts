import { AuthGuard } from './auth.guard';
import { UserComponent } from './user/user.component';
import { SubjectComponent } from './subject/subject.component';
import { GroupComponent } from './group/group.component';
import { UserGroupComponent } from './group/user-group/user-group.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { UserFormComponent } from './user-form/user-form.component';
import { GroupFormComponent } from './group-form/group-form.component';
import { MessageFormComponent } from './message-form/message-form.component';
import { AppComponent } from './app.component';
import { HistoryComponent } from './history/history.component';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: 'login', component: LoginFormComponent},
  {path: 'users', component: UserComponent, canActivate: [AuthGuard]},
  {path: 'subjects', component: SubjectComponent, canActivate: [AuthGuard]},
  {path: 'adduser', component: UserFormComponent, canActivate: [AuthGuard]},
  {path: 'groups', component: GroupComponent, canActivate: [AuthGuard]},
  {path: 'group-form', component: GroupFormComponent, canActivate: [AuthGuard]},
  {path: 'user-groups', component: UserGroupComponent, canActivate: [AuthGuard]},
  {path: 'message', component: MessageFormComponent, canActivate: [AuthGuard]},
  {path: 'history', component: HistoryComponent, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}
