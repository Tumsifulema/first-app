import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SignupPageRoutingModule } from './signup-routing.module';

import { SignupPage } from './signup.page';

import { InputNameComponent } from '../components/input-name/input-name.component';
import { InputPasswordComponent } from '../components/input-password/input-password.component';
import { InputEmailComponent } from '../components/input-email/input-email.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SignupPageRoutingModule,
    SharedModule
    
  ],
  declarations: [
    SignupPage,
    InputNameComponent,
   
  
  ]
})
export class SignupPageModule {}
