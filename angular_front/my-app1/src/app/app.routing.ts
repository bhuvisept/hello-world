import { NgModule             } from '@angular/core';
import { CommonModule,        } from '@angular/common';
import { BrowserModule        } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent   } from './dashboard/dashboard.component';
import { AppComponent         } from './app.component';
import { LoginComponent       } from './login/login.component';

import { RegistrationComponent } from './registration/registration.component';
import {UserProfileComponent } from './user-profile/user-profile.component';
import {EditProfileComponent} from './edit-profile/edit-profile.component';
const routes: Routes =[
    { 
        path: 'dashboard',
        component: DashboardComponent 
    },
    { 
        path :'login',
        component:LoginComponent
    },
    {
        path:'user-profile',
        component:UserProfileComponent
    },
    {
        path:'updateprofile',
        component:EditProfileComponent
    },
    {
        path:'registration',
        component:RegistrationComponent
    },

    { 
        path: '',
        redirectTo: 'login', 
        pathMatch: 'full' 
    }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
