import { Component, OnInit } from '@angular/core';

// SERVICE INCLUDED HERE
import {LoginService} from './services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [LoginService]
})
export class LoginComponent implements OnInit {
  model:loginModel; 
  user_name:string
  user_password:string
    /*constructor() { 
      this.model=new loginModel();
    }*/
    constructor(
      private _loginService:LoginService,
    ){
      this.model=new loginModel();
    }


  ngOnInit() {
      //this.model.user_name="jain";
      //this.model.user_password="jaijn";
    
  }
  onSubmit(){
      //console.log("I am here==>",this.model.user_name+"--"+this.model.user_password);
      // for business logic call service here
      this._loginService.login(this.model).subscribe(res=>{
        console.log(res);
        if(res.success){
          console.log("you are in success section")
        }else{
          console.log("Failed");
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
