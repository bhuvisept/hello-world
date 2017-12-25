import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import {Settings} from '../constant';

@Injectable()
export class LoginService {
	headers;
	constructor( private _http: Http ) { }
	public login(userData){

		userData.grant_type = 'password';
		this.headers = new Headers();
		this.headers.append("Authorization","Basic YXBpY2xpZW50OmFwaWNsaWVudA==");
		this.headers.append('Content-Type', 'application/json');
		return this._http.post(Settings.HOSTNAME+"/oauth2/token/",userData,{headers: this.headers}).map((res:Response) => res.json());
	}
	public logOut(UserID){
		//console.log("this is service page",UserID);
		return this._http.post(Settings.HOSTNAME+"/adminlogin/logOut?id="+UserID).map((res:Response)=>res.json());
	}
} 