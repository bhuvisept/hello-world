import { Component, OnInit,Injectable } from '@angular/core';
import { Router } from '@angular/router';
//import 'rxjs/add/operator/map';
// SERVICE INCLUDED HERE
import {LoginService} from '../services/login.service';

import { CookieService } from 'ngx-cookie';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [LoginService]
})

@Injectable()
export class LoginComponent implements OnInit {
    model:loginModel; 
    user_name:string
    user_password:string
    cookieValue : object;

     constructor(
      private _loginService:LoginService,
      private cookieService:CookieService,
      private router: Router,  
    ){
      this.model=new loginModel();
    }


    ngOnInit() {
        
    }
    onSubmit(){
       
        this._loginService.login(this.model).subscribe(res=>{
          this.cookieService.putObject('USERDATA',res);
          this.cookieValue = this.cookieService.getObject('USERDATA');
          //console.log("==========",this.cookieValue);
          if(res.UserID){
            this.router.navigate(['/dashboard']);
          }else{
            this.router.navigate(['/login']);
          }
        },
        err=>{
          console.log("You are in error section");
        });
    }
    
}

export class loginModel{
  user_name:string;
  user_password:string;
}
