import { Component, OnInit,Injectable } from '@angular/core';
import { Router } from '@angular/router';
//import { FlashMessagesService } from 'ngx-flash-messages';
import {RegistrationService} from './services/registration.service';
import {INgxMyDpOptions, IMyDateModel} from 'ngx-mydatepicker';

import { SweetAlertService } from 'ngx-sweetalert2';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
  providers:[RegistrationService,SweetAlertService],
  
 
})
@Injectable()
export class RegistrationComponent implements OnInit {
	model:registrationModel;
	
	username:string;
  password:string;

	constructor(
    private _router:Router,
    //private _flashMessage:FlashMessagesService,
    private _registrationService :RegistrationService,
    private _swal2: SweetAlertService,
    ){ 
  		this.model = new registrationModel();
	}
   // optional date changed callback
    onDateChanged(event: IMyDateModel): void {
        // date selected
    }
    myOptions: INgxMyDpOptions = {
        // other options...
        dateFormat: 'dd/mm/yyyy',
    };
  ngOnInit() {

  }
  onSubmit(){
    //console.log('I am in registration FE controller',this.model);
     this._registrationService.registration(this.model).subscribe(res=>{
        //console.log("fsdfsdf",res);
         if(res.status=='failure' && res.messageId==401){
            this._swal2.warning({ title: res.message });
             
         }else{
            if(res.status=="success"){
              this._swal2.success({ title: res.message}).then(() => {
                this._router.navigate(['/login']);
              });
            }
         }
    },
    err=>{
      var ErrParse = JSON.parse(err._body);
      if(ErrParse.status=='failure' && ErrParse.messageId==401){
        this._swal2.warning({ title: ErrParse.message });
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
