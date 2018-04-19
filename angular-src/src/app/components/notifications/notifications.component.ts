import { Component, OnInit } from '@angular/core';
import {ValidateService} from '../../services/validate.service';
import {AuthService} from '../../services/auth.service';
import {PostsService} from '../../services/posts.service';
import {FlashMessagesService} from 'angular2-flash-messages';
import {Router} from '@angular/router';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css']
})
export class NotificationsComponent implements OnInit {
  notifications: Object;
  user_id: String;

  constructor(
    private validateService: ValidateService,
    private flashMessage: FlashMessagesService,
    private authService:AuthService,
    private postsService: PostsService,
    private router: Router
  ) { }

  ngOnInit() {
    this.authService.getProfile().subscribe(profile => {
      this.user_id = profile.user._id;
      const user = {
        user_id: this.user_id
      };
      this.postsService.getNotifications(user).subscribe(data => {
        this.notifications = data.notifications;
      },
      err => {
    	  console.log(err);
    	  return false;
      });
    },
    err => {
  	  console.log(err);
  	  return false;
    });
  }

}
