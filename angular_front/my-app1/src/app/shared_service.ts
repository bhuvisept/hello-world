import { Component, OnInit,Injectable} from '@angular/core';
import { CookieService } from 'ngx-cookie';
import { Router } from '@angular/router';

@Injectable()
export class SharedService  {
	cookieValue : object;
	
	constructor(private cookieService:CookieService,private _router:Router) {
		this.cookieValue = this.cookieService.getObject('USERDATA');
		// if(! this.cookieValue){
		// 	this._router.navigate(['/login']);
		// }
		
	}

	//
	public GetUserId(){
		
		this.cookieValue = this.cookieService.getObject('USERDATA');
		return (this.cookieValue) ? this.cookieValue.UserID : null;
	}
	public GetUserName(){
		this.cookieValue = this.cookieService.getObject('USERDATA');
		return (this.cookieValue)?this.cookieValue.username:null;
	}
}