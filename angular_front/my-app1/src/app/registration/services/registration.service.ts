import {Injectable} from '@angular/core';
import {Http,Response,Headers,RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';
import {Settings} from '../../constant';

@Injectable()

export class RegistrationService {
	constructor(private _http : Http){

	}
	registration(userData){
		console.log("Registration service",userData);
		//let headers = new Headers();
		//headers.append('Content-Type', 'application/json');
		return  this._http.post(Settings.HOSTNAME+"/userregistration/saveUserData/",userData).map((res:Response) => res.json());
	}
}