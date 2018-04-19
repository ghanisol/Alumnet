import { Component, OnInit } from '@angular/core';
import {ValidateService} from '../../services/validate.service';
import {AuthService} from '../../services/auth.service';
import {FlashMessagesService} from 'angular2-flash-messages';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register-alumni',
  templateUrl: './register-alumni.component.html',
  styleUrls: ['./register-alumni.component.css']
})
export class RegisterAlumniComponent implements OnInit {

  fname: String;
  lname: String;
  email: String;
  password: String;
  major: String;
  research_area: String;
  grad_year: Number;
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
  }

  onRegisterSubmit(){
  	const user = {
  		fname: this.fname,
      lname: this.lname,
  		email: this.email,
  		password: this.password,
      is_alumni: true,
      major: this.major,
      research_area: this.research_area,
      grad_year: this.grad_year,
      university: this.university,
      city: this.city,
      state: this.state,
      country: this.country,
      link_facebook: this.link_facebook,
      link_linkedin: this.link_linkedin,
      link_twitter: this.link_twitter
  	}

  	// Required Fields
  	if (!this.validateService.validateRegister(user)){
  		this.flashMessage.show('Please fill in all fields', {cssClass: 'alert-danger', timeout: 3000});
  		return false;
  	}

  	// Validate Email
  	if (!this.validateService.validateEmail(user.email)){
  		this.flashMessage.show('Please use a valid email', {cssClass: 'alert-danger', timeout: 3000});
  		return false;
  	}

    // Register User
    this.authService.registerUser(user).subscribe(data => {
      if(data.success){
        this.flashMessage.show('You are now registered and can login', {cssClass: 'alert-success', timeout: 3000});
        this.router.navigate(['/login']);
      } else {
        this.flashMessage.show('Something went wrong', {cssClass: 'alert-danger', timeout: 3000});
        this.router.navigate(['/register']);
      }
    });

  }

}
