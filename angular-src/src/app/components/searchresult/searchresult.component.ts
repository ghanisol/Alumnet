import { Component, OnInit } from '@angular/core';
import {ValidateService} from '../../services/validate.service';
import {AuthService} from '../../services/auth.service';
import {PostsService} from '../../services/posts.service';
import {SearchService} from '../../services/search.service';
import {FlashMessagesService} from 'angular2-flash-messages';
import {Router} from '@angular/router';

@Component({
  selector: 'app-searchresult',
  templateUrl: './searchresult.component.html',
  styleUrls: ['./searchresult.component.css']
})
export class SearchresultComponent implements OnInit {

  result: any;

  constructor(
    private validateService: ValidateService,
    private flashMessage: FlashMessagesService,
    private authService:AuthService,
    private postsService: PostsService,
    private searchService: SearchService,
    private router: Router
  ) { }

  ngOnInit() {
    this.searchService.currentResult.subscribe(result => this.result = result);
  }

}
