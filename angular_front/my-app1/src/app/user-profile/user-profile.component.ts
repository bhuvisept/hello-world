import { Component, OnInit,Injectable,imput } from '@angular/core';

import {CookieService} from 'ngx-cookie';
import {SharedService} from '../shared_service';
import { Router } from '@angular/router';
import {UserProfileService} from './services/userprofile.service';
import { Location } from '@angular/common';


console.log("dgdsgsdg",Location.path);

//console.log(Router.currentInstruction.component.routeName);
@Component({

    selector: 'app-user-profile',

    
    templateUrl: './user-profile.component.html',
    //templateUrl: './updateprofile.component.html',
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
    private _Location:Location,
  	
  	) 
    { 
      this.loc_path = this._Location.path();
      console.log("Path =",this.loc_path);
      this._router.events.subscribe((evt) => {
       
        this.USERID   = this._SharedService.GetUserId();
        this.USERNAME = this._SharedService.GetUserName();
       
      });
  }
  editProfile(){
    console.log("sfasf");
    this._router.navigate(['/updateprofile']);
  }
  ngOnInit() {
    this.USERID   = this._SharedService.GetUserId();
    this.UserProfileService.ViewProfile(this.USERID).subscribe(res=>{
      if(res.status=='success'){
        //console.log("---------",res.data);
        this.UserData = res.data;
      }
      
    },
    err=>{

    });
  }

}
