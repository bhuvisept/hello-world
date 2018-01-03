import { NgModule             } from '@angular/core';
import { CommonModule,        } from '@angular/common';
import { BrowserModule        } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent   } from './dashboard/dashboard.component';
import { AppComponent         } from './app.component';
import { LoginComponent       } from './login/login.component';

import { RegistrationComponent } from './registration/registration.component';
import {UserProfileComponent } from './user-profile/user-profile.component';
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
        path: '',
        redirectTo: 'login', 
        pathMatch: 'full' 
    },
    {
        
        path:'user-profile',
        component:UserProfileComponent
    },
    {
        path:'registration',
        component:RegistrationComponent
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
