import { NgModule             } from '@angular/core';
import { CommonModule,        } from '@angular/common';
import { BrowserModule        } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent   } from './dashboard/dashboard.component';
import { AppComponent         } from './app.component';
import { LoginComponent       } from './login/login.component';


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
