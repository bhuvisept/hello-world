import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule,Router} from '@angular/router';
import { AppComponent } from './app.component';

import { CookieModule } from 'ngx-cookie';
import { DashboardComponent } from './dashboard/dashboard.component';
import {AppRoutingModule} from './app.routing';
import { LoginComponent } from './login/login.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';
import {FormsModule} from '@angular/forms';
import { HttpModule} from '@angular/http';
import {SharedService} from './shared_service';
import {LoginService} from './services/login.service';
import { FlashMessagesModule } from 'ngx-flash-messages';
import { RegistrationComponent } from './registration/registration.component';
import {RegistrationService} from './registration/services/registration.service';

import { NgxMyDatePickerModule } from 'ngx-mydatepicker';

import { SweetAlertService } from 'ngx-sweetalert2';
import { UserProfileComponent } from './user-profile/user-profile.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LoginComponent,
    SidebarComponent,
    HeaderComponent,
    RegistrationComponent,
    UserProfileComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,
    CookieModule.forRoot(),
    FlashMessagesModule,
    NgxMyDatePickerModule.forRoot()
  ],
  providers: [CookieModule,SharedService,LoginService,RegistrationService,SweetAlertService],
  bootstrap: [AppComponent]
})

export class AppModule {


}
