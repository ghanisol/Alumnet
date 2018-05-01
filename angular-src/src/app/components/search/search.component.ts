import { Component, OnInit } from '@angular/core';
import {ValidateService} from '../../services/validate.service';
import {AuthService} from '../../services/auth.service';
import {PostsService} from '../../services/posts.service';
import {SearchService} from '../../services/search.service';
import {FlashMessagesService} from 'angular2-flash-messages';
import {Router} from '@angular/router';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  major: String;
  research_area: String;
  university: String;
  city: String;
  state: String;
  country: String;

  constructor(
    private validateService: ValidateService,
    private flashMessage: FlashMessagesService,
    private authService:AuthService,
    private postsService: PostsService,
    private searchService: SearchService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  onSearchSubmit(){
    const query = {
      major: this.major,
      research_area: this.research_area,
      university: this.university,
      city: this.city,
      state: this.state,
      country: this.country
    };

    // Search for results
    this.searchService.getUsers(query).subscribe(data => {
      if(data.success){
        this.flashMessage.show('Result Found', {cssClass: 'alert-success', timeout: 3000});
        this.searchService.changeResult(data.users);
        this.router.navigate(['/searchresult']);
      } else {
        this.flashMessage.show('Something went wrong', {cssClass: 'alert-danger', timeout: 3000});
        this.router.navigate(['/search']);
      }
    });
  }

}
