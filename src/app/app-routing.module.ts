import { AuthGuard } from './auth.guard';
import { UserComponent } from './user/user.component';
import { SubjectComponent } from './subject/subject.component';
import { GroupComponent } from './group/group.component';
import { UserGroupComponent } from './group/user-group/user-group.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { UserFormComponent } from './user-form/user-form.component';
import { GroupFormComponent } from './group-form/group-form.component';
import { MessageFormComponent } from './message-form/message-form.component'

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: 'login', component: LoginFormComponent},
  {path: 'users', component: UserComponent},
  {path: 'subjects', component: SubjectComponent},
  {path: 'adduser', component: UserFormComponent},
  {path: 'groups', component: GroupComponent},
  {path: 'group-form', component: GroupFormComponent},
  {path: 'user-groups', component: UserGroupComponent},
  {path: 'message', component: MessageFormComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}
