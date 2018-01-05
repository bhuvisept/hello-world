import { Component, OnInit } from '@angular/core';
import {CookieService} from 'ngx-cookie';
import {SharedService} from '../shared_service';
import { Router } from '@angular/router';
import {UserProfileService} from '../user-profile/services/userprofile.service';
import {INgxMyDpOptions, IMyDateModel} from 'ngx-mydatepicker';
//var moment = require('moment/moment');

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css'],

})
export class EditProfileComponent implements OnInit {
	
  constructor(
  	private _router:Router,
   	private _cookieService:CookieService,
  	private _SharedService:SharedService,
    private UserProfileService:UserProfileService,
  	) { 
  		this.model = new updateOProfileModel();

  	}
  	// optional date changed callback
    onDateChanged(event: IMyDateModel): void {
        // date selected
    }
    myOptions: INgxMyDpOptions = {
        // other options...
        // dateFormat: 'yyyy-mm-dd',
    };
    
  ngOnInit() {
  	this.USERID   = this._SharedService.GetUserId();
    this.UserProfileService.ViewProfile(this.USERID).subscribe(res=>{
      if(res.status=='success'){
        this.model = res.data;
        this.model.date_of_birth= { jsdate: new Date(this.model.date_of_birth) };
      }
    },
    err=>{

    });
  }
  updateProfile(){
  	console.log("==== in update profile component",this.model);
  	this.UserProfileService.updateProfile(this.model).subscribe(res=>{
  		console.log("Success");
  	},
  	err=>{
  		console.log("Err");
  	});
  }
}
export class updateOProfileModel{
  username:string;
  password:string;

}