import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class SearchService {

  private resultSource = new BehaviorSubject<any>({});
  currentResult = this.resultSource.asObservable();

  authToken: any;
  query: any;

  constructor(
    private http:Http
  ) { }

  getUsers(query){
    let headers = new Headers();
    this.loadToken();
    headers.append('Authorization', this.authToken);
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/users/search', query, {headers:headers})
      .map(res => res.json());
  }

  loadToken(){
    const token = localStorage.getItem('id_token');
    this.authToken = token;
  }

  changeResult(result: any) {
    this.resultSource.next(result);
  }
}
