import { Component, OnInit } from '@angular/core';
import {SharedService} from '../shared_service';
import {CookieService} from 'ngx-cookie';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
	USERID:string;
  	USERNAME:string;
  constructor(
  	private _SharedService:SharedService,
  	private _cookieService:CookieService,
  	private _router:Router,
  	) { 
  		this._router.events.subscribe((evt) => {
        //fetch  your userid cookie code here
        this.USERID   = this._SharedService.GetUserId();
        this.USERNAME = this._SharedService.GetUserName();
    });
  }

  ngOnInit() {
  	this.USERID   = this._SharedService.GetUserId();
  	//console.log("dgdsgdfg",this.USERID);
  }

}
