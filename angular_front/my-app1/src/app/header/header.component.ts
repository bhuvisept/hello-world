import { Component, OnInit,Injectable } from '@angular/core';
import {CookieService} from 'ngx-cookie';
import {SharedService} from '../shared_service';
import { Router } from '@angular/router';
import {LoginService} from '../services/login.service';
/*import {Settings} from '../constant';*/
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {
    USERID;
    USERNAME;
  	constructor(
      private _router:Router,
      private _cookieService:CookieService,
      private _SharedService:SharedService,
      private _loginService:LoginService,) { 
      this._router.events.subscribe((evt) => {
        //fetch  your userid cookie code here
        this.USERID   = this._SharedService.GetUserId();
        this.USERNAME = this._SharedService.GetUserName();
    });
  	}
	
	ngOnInit() {
    	this.USERID 	= this._SharedService.GetUserId();
      this.USERNAME 	= this._SharedService.GetUserName();
	}

  logout() {
     // this.USERID   = this._SharedService.GetUserId();
     // this._loginService.logOut(this.USERID).subscribe(res=>{
     //     console.log("Return after logout",this.USERID);
     //     console.log("Return after logout",res);
     // },
     // err=>{
     //   console.log("You are in error section");
     // });
     this._cookieService.removeAll();
     this._router.navigate(['/login']);
  }
}
