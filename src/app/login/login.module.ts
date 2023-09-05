import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoginPageRoutingModule } from './login-routing.module';

import { LoginPage } from './login.page';

import { InputLayoutComponent } from '../components/input-layout/input-layout.component';   //added component button here

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoginPageRoutingModule
  ],
  declarations: [
    LoginPage , 
    InputLayoutComponent,
  ]
})
export class LoginPageModule {}
