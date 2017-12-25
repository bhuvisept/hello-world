import { Component, OnInit,Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {LoginService} from '../services/login.service';
import { FlashMessagesService } from 'ngx-flash-messages';
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
      private flashMessagesService: FlashMessagesService,
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
            this.router.navigate(['/dashboard']);
          }else{
            this.router.navigate(['/login']);
          }
        },
        err=>{
              if(err.status==403 && err.statusText=='Forbidden'){
                  this.flashMessagesService.show("User name and password is n't correct.Please try again..", {
                    classes: ['alert', 'alert-warning'], // You can pass as many classes as you need
                    timeout: 2000, // Default is 3000
                  });
              }
        });
    }
    
}

export class loginModel{
  user_name:string;
  user_password:string;
}
