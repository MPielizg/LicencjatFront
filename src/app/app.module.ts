import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { GroupComponent } from './group/group.component';
import { GroupFormComponent } from './group-form/group-form.component';
import { SubjectComponent } from './subject/subject.component';
import { MessageFormComponent } from './message-form/message-form.component';
import { HistoryComponent } from './history/history.component';
import { UserService } from './service/user.service';
import { SubjectService } from './service/subject.service';
import { GroupService } from './service/group.service';
import { HistoryService } from './service/history-service';
import { MessageFormService } from './service/message-form.service';
import { UserFormComponent } from './user-form/user-form.component';
import { UserGroupComponent } from './group/user-group/user-group.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { LoginFormService } from './service/login-form.service';
import { GroupCustomService } from './service/group-custom.service';
import { AuthGuard } from './auth.guard';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    GroupComponent,
    GroupFormComponent,
    SubjectComponent,
    UserFormComponent,
    UserGroupComponent,
    LoginFormComponent,
    MessageFormComponent,
    HistoryComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserModule,
    HttpModule,
    FormsModule
  ],
  providers: [ UserService, SubjectService, GroupService, LoginFormService, AuthGuard, GroupCustomService, HistoryService, MessageFormService],
  bootstrap: [AppComponent]
})
export class AppModule { }
