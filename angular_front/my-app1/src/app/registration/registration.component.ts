import { Component, OnInit,Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'ngx-flash-messages';
import {RegistrationService} from './services/registration.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
  providers:[RegistrationService],
  
 
})
@Injectable()
export class RegistrationComponent implements OnInit {
	model:registrationModel;
	
	username:string;
  password:string;
	constructor(
    private _router:Router,
    private _flashMessage:FlashMessagesService,
    private _registrationService :RegistrationService,
    ){ 
  		this.model = new registrationModel();
	}
 
  ngOnInit() {

  }
  onSubmit(){
    console.log('I am in registration FE controller',this.model);
     this._registrationService.registration(this.model).subscribe(res=>{
        console.log("fsdfsdf",res);
         if(res.status=='failure' && res.messageId==401){
            
             this._flashMessage.show(res.message, {
               classes: ['alert', 'alert-warning'], // You can pass as many classes as you need
               timeout: 10000, // Default is 3000
             });
         }else{
            if(res.status=="success"){
               
               this._flashMessage.show(res.message, {
               classes: ['alert', 'alert-warning'], // You can pass as many classes as you need
               timeout: 10000, // Default is 3000
             });
            }
         }
    },
    err=>{
      var ErrParse = JSON.parse(err._body);
      if(ErrParse.status=='failure' && ErrParse.messageId==401){
        this._flashMessage.show(ErrParse.message, {
          classes: ['alert', 'alert-warning'], // You can pass as many classes as you need
          timeout: 10000, // Default is 3000
        });
      }
    });
  }

  forgot_password(){
  	console.log("I am in registration section");
   
  }

}
export class registrationModel{
  username:string;
  password:string;
}
