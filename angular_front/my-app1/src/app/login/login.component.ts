import { Component, OnInit,Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {LoginService} from '../services/login.service';

import { CookieService } from 'ngx-cookie';
import { SweetAlertService} from 'ngx-sweetalert2';

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
  
      private _swal2:SweetAlertService;
    ){
      this.model=new loginModel();
    }


    ngOnInit() {
        
    }
    
    onSubmit(){
       
        this._loginService.login(this.model).subscribe(res=>{
          this.cookieService.putObject('USERDATA',res);
          this.cookieValue = this.cookieService.getObject('USERDATA');
          if(res.UserID){
            this._swal2.success({ title: "You are successfully loged in !" }).then(()=>{
               this.router.navigate(['/dashboard']);
            });
           
          }else{
            this.router.navigate(['/login']);
          }
        },
        err=>{
              if(err.status==403 && err.statusText=='Forbidden'){
                  this._swal2.error({ title: "User name and password is n't correct.Please try again.." });
              }
        });
    }
    
}

export class loginModel{
  user_name:string;
  user_password:string;
}
