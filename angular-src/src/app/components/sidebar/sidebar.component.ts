import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  user:Object;
  
  constructor(
  	private authService:AuthService,
  	private router:Router
  ) { }

  ngOnInit() {
  	this.authService.getProfile().subscribe(profile => {
  	  this.user = profile.user
  	},
  	err => {
  	  console.log(err);
  	  return false;

  	});
  }

}
