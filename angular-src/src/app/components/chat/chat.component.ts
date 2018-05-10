import { Component, OnInit } from '@angular/core';
import {ValidateService} from '../../services/validate.service';
import {AuthService} from '../../services/auth.service';
import {PostsService} from '../../services/posts.service';
import {ChatService} from '../../services/chat.service';
import {FlashMessagesService} from 'angular2-flash-messages';
import {Router} from '@angular/router';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  messages: Object;
  user_id: String;
  chat_user: String;
  chat_messages: Object;
  temp_message: String;
  user_name: String;
  chat_user_name: String;

  constructor(
    private validateService: ValidateService,
    private flashMessage: FlashMessagesService,
    private authService:AuthService,
    private postsService: PostsService,
    private chatService: ChatService,
    private router: Router
  ) { }

  ngOnInit() {
    this.authService.getProfile().subscribe(profile => {
      this.user_id = profile.user._id;
      const user = {
        user_id: this.user_id
      };
      this.chatService.getChats(user).subscribe(data => {

        this.messages = data.messages;
        console.log(this.messages);
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

  onChatSubmit(to_id, from_id, to_name, from_name) {
    if (this.user_id == to_id) {
      this.chat_user = from_id;
      this.chat_user_name = from_name;
      this.user_name = to_name;
    } else {
      this.chat_user = to_id;
      this.chat_user_name = to_name;
      this.user_name = from_name;
    }
  }

  onMessageSubmit(message){
    let newMessage = {
      to_id: this.chat_user,
      to_name: this.chat_user_name,
      from_id: this.user_id,
      from_name: this.user_name,
      message: message
    }

    // Add Comment
    this.chatService.addChat(newMessage).subscribe(data => {
      if(data.success){
        this.flashMessage.show('Message Sent', {cssClass: 'alert-success', timeout: 3000});
        this.router.navigate(['/chat']);
      } else {
        this.flashMessage.show('Something went wrong', {cssClass: 'alert-danger', timeout: 3000});
        this.router.navigate(['/chat']);
      }
    });

    const user = {
      user_id: this.user_id
    };
    this.chatService.getChats(user).subscribe(data => {
      this.messages = data.messages;
      this.temp_message = "";
    },
    err => {
      console.log(err);
      return false;
    });

  }

}
