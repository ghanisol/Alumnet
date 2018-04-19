import { Injectable } from '@angular/core';

@Injectable()
export class ValidateService {

  constructor() { }

  validateRegister(user){
  	if(user.fname == undefined || user.lname == undefined || user.email == undefined || user.password == undefined || user.major == undefined || user.research_area == undefined || user.grad_year == undefined || user.university == undefined || user.city == undefined || user.country == undefined){
  		return false;
  	} else {
  		return true;
  	}
  }

  validateEmail(email){
  	const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  	return re.test(email);
  }

}
