import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
// IMPORT THIS MODULE STEP 1
import { CookieService } from 'ngx-cookie';
import {SharedService} from './shared_service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

// INHERIT ONINIT STEP 2
export class AppComponent implements OnInit {
  
  USERID:string;
  USERNAME:string;
 
  // CALL CONSTRUCTOR STEP 3
  constructor(
      private cookieService:CookieService,
      private _SharedService:SharedService,
      private _router:Router,
      ) { 
    this._router.events.subscribe((evt) => {
        //fetch  your userid cookie code here
        this.USERID   = this._SharedService.GetUserId();
        this.USERNAME = this._SharedService.GetUserName();
    });
  }
  ngOnInit() {
    
  }
}
