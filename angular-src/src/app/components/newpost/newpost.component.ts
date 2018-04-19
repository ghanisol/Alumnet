import { Component, OnInit } from '@angular/core';
import {ValidateService} from '../../services/validate.service';
import {AuthService} from '../../services/auth.service';
import {PostsService} from '../../services/posts.service';
import {FlashMessagesService} from 'angular2-flash-messages';
import {Router} from '@angular/router';

@Component({
  selector: 'app-newpost',
  templateUrl: './newpost.component.html',
  styleUrls: ['./newpost.component.css']
})
export class NewpostComponent implements OnInit {
  user_id: any;
  message: String;

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
    },
    err => {
  	  console.log(err);
  	  return false;
    });
  }

  onPostSubmit() {
    const newPost = {
      user_id: this.user_id,
      message: this.message
    };

    // add Comment
    this.postsService.addPost(newPost).subscribe(data => {
      if(data.success){
        this.flashMessage.show('Message Posted', {cssClass: 'alert-success', timeout: 3000});
        this.router.navigate(['/newsfeed']);
      } else {
        this.flashMessage.show('Something went wrong', {cssClass: 'alert-danger', timeout: 3000});
        this.router.navigate(['/newsfeed']);
      }
    });
  }

}
