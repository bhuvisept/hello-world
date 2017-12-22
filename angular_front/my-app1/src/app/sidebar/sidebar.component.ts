import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie';
import {SharedService} from './../shared_service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  USERID:string;
  USERNAME:string;
  constructor(
    private cookieService:CookieService,
    private _SharedService:SharedService,
    private _router:Router
    ) { 
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

}
