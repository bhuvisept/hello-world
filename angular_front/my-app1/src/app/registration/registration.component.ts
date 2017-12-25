import { Component, OnInit,Injectable } from '@angular/core';
import {LoginService} from '../services/login.service';
//import { Router } from '@angular/router';
//import { CookieService } from 'ngx-cookie';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
  providers: [LoginService]
 
})
@Injectable()
export class RegistrationComponent implements OnInit {
	model:registrationModel;
	//model:any={}; 
	username:string;
    password:string;
  	constructor(){ 
  		this.model = new registrationModel();
	}

  ngOnInit() {
  }

  forgot_password(){
  	console.log("I am in registration section"); 
  }

}
export class registrationModel{
  username:string;
  password:string;
}
