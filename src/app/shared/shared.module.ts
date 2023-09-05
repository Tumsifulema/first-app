import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputPasswordComponent } from '../components/input-password/input-password.component';
import { InputEmailComponent } from '../components/input-email/input-email.component';
import { ButtonLayoutComponent } from '../components/button-layout/button-layout.component';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';



@NgModule({
  declarations: [
    InputEmailComponent,
    InputPasswordComponent,
    ButtonLayoutComponent,

  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule
  ],
  exports: [
    InputEmailComponent,
    InputPasswordComponent,
    ButtonLayoutComponent
  ]
})
export class SharedModule { }
