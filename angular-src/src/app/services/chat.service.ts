import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ChatService {
  authToken: any;
  user: any;

  constructor(
    private http:Http
  ) { }

  getChats(user){
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/chats/getmessages', user, {headers:headers})
      .map(res => res.json());
  }

  addChat(newMessage){
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/chats/sendmessage', newMessage, {headers:headers})
      .map(res => res.json());
  }

  loadToken(){
    const token = localStorage.getItem('id_token');
    this.authToken = token;
  }
}
