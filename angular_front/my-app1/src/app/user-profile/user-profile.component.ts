import { Component, OnInit,Injectable } from '@angular/core';

import {CookieService} from 'ngx-cookie';
import {SharedService} from '../shared_service';
import { Router } from '@angular/router';
import {LoginService} from '../services/login.service';
@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css'],
  
})
export class UserProfileComponent implements OnInit {
  USERID;
  USERNAME;
  constructor(
	 	private _router:Router,
   	private _cookieService:CookieService,
  	private _SharedService:SharedService,
    private _loginService:LoginService,
  	
  	) 
    { 
      this._router.events.subscribe((evt) => {
       
        this.USERID   = this._SharedService.GetUserId();
        this.USERNAME = this._SharedService.GetUserName();
       
      });
  }

  ngOnInit() {
    //this.cookieValue = this._SharedService.GetUserData();

    this.USERID   = this._SharedService.GetUserId();
    this.model.username = this._SharedService.GetUserName();
  }

}
