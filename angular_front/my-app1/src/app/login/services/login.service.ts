import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import {Settings} from '../../constant';

@Injectable()
export class LoginService {
	
	constructor( private _http: Http ) {
		
	}
	public login(userData){
		
		let headers = new Headers();
		
		headers.append('Content-Type', 'application/json');
		headers.append('Authorization', 'Basic YXBpY2xpZW50OmFwaWNsaWVudA==');
		userData.grant_type = 'password';
		return  this._http.post(Settings.HOSTNAME+"/oauth2/token/",userData,{headers:headers}).map((res:Response) => res.json());
	}
	public logOut(userId){
		console.log("User Id is",userId);
	}


}