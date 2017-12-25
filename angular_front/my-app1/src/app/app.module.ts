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

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LoginComponent,
    SidebarComponent,
    HeaderComponent,
    RegistrationComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,
    CookieModule.forRoot(),
    FlashMessagesModule
  ],
  providers: [CookieModule,SharedService,LoginService],
  bootstrap: [AppComponent]
})

export class AppModule { }
