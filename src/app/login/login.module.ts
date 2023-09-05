import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoginPageRoutingModule } from './login-routing.module';

import { LoginPage } from './login.page';

import { InputEmailComponent } from '../components/input-email/input-email.component';

import { InputPasswordComponent } from '../components/input-password/input-password.component';
import { ButtonLayoutComponent } from '../components/button-layout/button-layout.component';
import { SharedModule } from '../shared/shared.module';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoginPageRoutingModule,
    SharedModule
  ],
  declarations: [
    LoginPage
  ]
})
export class LoginPageModule {}
