import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import {Settings} from '../../constant';

@Injectable()
export class UserProfileService {
	
	constructor( private _http: Http ) {
		
	}
	public ViewProfile(userID){
		return  this._http.post(Settings.HOSTNAME+"/UserProfile/profileData/?id="+userID).map((res:Response) => res.json());
	}
	

}