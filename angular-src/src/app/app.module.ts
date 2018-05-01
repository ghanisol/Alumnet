import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {RouterModule, Routes} from '@angular/router';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { NewsfeedComponent } from './components/newsfeed/newsfeed.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ChatComponent } from './components/chat/chat.component';
import { MapComponent } from './components/map/map.component';
import { SearchComponent } from './components/search/search.component';
import { SearchresultComponent } from './components/searchresult/searchresult.component';
import { EditprofileComponent } from './components/editprofile/editprofile.component';
import { FooterComponent } from './components/footer/footer.component';
import { NotificationsComponent } from './components/notifications/notifications.component';
import { RegisterAlumniComponent } from './components/register-alumni/register-alumni.component';
import { RegisterStudentComponent } from './components/register-student/register-student.component';
import { NewpostComponent } from './components/newpost/newpost.component';

import {FlashMessagesModule} from 'angular2-flash-messages';

import {ValidateService} from './services/validate.service';
import {AuthService} from './services/auth.service';
import {PostsService} from './services/posts.service';
import {SearchService} from './services/search.service';

import {AuthGuard} from './guards/auth.guard';
import {UnAuthGuard} from './guards/unauth.guard';



const appRoutes: Routes = [
  {path:'', redirectTo:'newsfeed', pathMatch:'full'},
  {path:'newsfeed', component: NewsfeedComponent, canActivate:[AuthGuard]},
  {path:'newpost', component: NewpostComponent, canActivate:[AuthGuard]},
  {path:'register', component: RegisterComponent, canActivate:[UnAuthGuard]},
  {path:'register-alumni', component: RegisterAlumniComponent, canActivate:[UnAuthGuard]},
  {path:'register-student', component: RegisterStudentComponent, canActivate:[UnAuthGuard]},
  {path:'login', component: LoginComponent, canActivate:[UnAuthGuard]},
  {path:'chat', component: ChatComponent, canActivate:[AuthGuard]},
  {path:'map', component: MapComponent, canActivate:[AuthGuard]},
  {path:'search', component: SearchComponent, canActivate:[AuthGuard]},
  {path:'searchresult', component: SearchresultComponent, canActivate:[AuthGuard]},
  {path:'editprofile', component: EditprofileComponent, canActivate:[AuthGuard]},
  {path:'notifications', component: NotificationsComponent, canActivate:[AuthGuard]}
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    NewsfeedComponent,
    SidebarComponent,
    ChatComponent,
    MapComponent,
    SearchComponent,
    SearchresultComponent,
    EditprofileComponent,
    FooterComponent,
    NotificationsComponent,
    RegisterAlumniComponent,
    RegisterStudentComponent,
    NewpostComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    FlashMessagesModule
  ],
  providers: [ValidateService, AuthService, PostsService, SearchService, AuthGuard, UnAuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
