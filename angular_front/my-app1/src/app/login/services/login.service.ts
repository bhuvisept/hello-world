import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import {Settings} from '../../constant';

@Injectable()
export class LoginService {
	
	constructor( private _http: Http ) { }
	public login(userData){
		//console.log("======jjjjjjjjjj=============",Settings.HOSTNAME);
	 	return this._http.post(Settings.HOSTNAME+"/adminlogin/login",userData).map((res:Response) => res.json());
	}
}