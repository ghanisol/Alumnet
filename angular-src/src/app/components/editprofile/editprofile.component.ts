import { Component, OnInit } from '@angular/core';
import {ValidateService} from '../../services/validate.service';
import {AuthService} from '../../services/auth.service';
import {FlashMessagesService} from 'angular2-flash-messages';
import {Router} from '@angular/router';

@Component({
  selector: 'app-editprofile',
  templateUrl: './editprofile.component.html',
  styleUrls: ['./editprofile.component.css']
})
export class EditprofileComponent implements OnInit {
  user: Object;

  email: String;
  password: String;
  major: String;
  research_area: String;
	university: String;
	city: String;
	state: String;
	country: String;
	link_facebook: String;
	link_linkedin: String;
	link_twitter: String;

  constructor(
    private validateService: ValidateService,
    private flashMessage: FlashMessagesService,
    private authService:AuthService,
    private router: Router
    ) { }

  ngOnInit() {
    this.authService.getProfile().subscribe(profile => {
  	  this.user = profile.user;
      this.email = profile.user.email;
      this.major = profile.user.major;
      this.research_area = profile.user.research_area;
      this.university = profile.user.university;
      this.city = profile.user.city;
      this.state = profile.user.state;
      this.country = profile.user.country;
      this.link_facebook = profile.user.link_facebook;
      this.link_linkedin = profile.user.link_linkedin;
      this.link_twitter = profile.user.link_twitter;
  	},
  	err => {
  	  console.log(err);
  	  return false;

  	});
  }

  onSaveSubmit() {
    const updatedUser = {
      email: this.email,
      password: this.password,
      major: this.major,
      research_area: this.research_area,
    	university: this.university,
    	city: this.city,
    	state: this.state,
    	country: this.country,
    	link_facebook: this.link_facebook,
    	link_linkedin: this.link_linkedin,
    	link_twitter: this.link_twitter
    }

    // Update User
    this.authService.updateUser(updatedUser).subscribe(data => {
      if(data.success){
        this.flashMessage.show('User updated', {cssClass: 'alert-success', timeout: 3000});
        this.router.navigate(['/editprofile']);
      } else {
        this.flashMessage.show('Something went wrong', {cssClass: 'alert-danger', timeout: 3000});
        this.router.navigate(['/editprofile']);
      }
    });
  }

}
