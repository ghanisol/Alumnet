import { Component, OnInit } from '@angular/core';
import {ValidateService} from '../../services/validate.service';
import {AuthService} from '../../services/auth.service';
import {FlashMessagesService} from 'angular2-flash-messages';
import {Router} from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  status: String;

  options = [
    {value: 'student', viewValue: 'Student'},
    {value: 'alumni', viewValue: 'Alumni'}
  ];

  constructor(
    private validateService: ValidateService,
    private flashMessage: FlashMessagesService,
    private authService:AuthService,
    private router: Router
    ) { }

  ngOnInit() {
  }

  onSelectSubmit(){
    if (this.status == "alumni") {
      this.router.navigate(['/register-alumni']);
    }
    else {
      this.router.navigate(['/register-student']);
    }

  }

}
