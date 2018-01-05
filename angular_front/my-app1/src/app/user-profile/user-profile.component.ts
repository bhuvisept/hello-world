import { Component, OnInit,Injectable } from '@angular/core';

import {CookieService} from 'ngx-cookie';
import {SharedService} from '../shared_service';
import { Router } from '@angular/router';
import {UserProfileService} from './services/userprofile.service';

@Component({

    selector: 'app-user-profile',
    templateUrl: './user-profile.component.html',
    styleUrls: ['./user-profile.component.css'],
  
})
export class UserProfileComponent implements OnInit {
  USERID;
  USERNAME;
  UserData = {};
  constructor(
	 	private _router:Router,
   	private _cookieService:CookieService,
  	private _SharedService:SharedService,
    private UserProfileService:UserProfileService,
    ) 
    { 
      this._router.events.subscribe((evt) => {
        this.USERID   = this._SharedService.GetUserId();
        this.USERNAME = this._SharedService.GetUserName();
      });
  }
  
  ngOnInit() {
    this.USERID   = this._SharedService.GetUserId();
    this.UserProfileService.ViewProfile(this.USERID).subscribe(res=>{
      if(res.status=='success'){
        this.UserData = res.data;
      }
    },
    err=>{

    });
  }

}
