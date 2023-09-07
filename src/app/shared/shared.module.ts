import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputPasswordComponent } from '../components/input-password/input-password.component';
import { InputEmailComponent } from '../components/input-email/input-email.component';
import { ButtonLayoutComponent } from '../components/button-layout/button-layout.component';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
//import { MaskitoModule } from '@maskito/angular';
import { PhoneNumberComponent } from '../phone-number/phone-number.component';
import { MaskitoModule } from '@maskito/angular';
import { CardNumberComponent } from '../card-number/card-number.component';
import { DateBirthComponent } from '../date-birth/date-birth.component';
import { FullNameComponent } from '../full-name/full-name.component';
import { RegionComponent } from '../region/region.component';
import { DistrictComponent } from '../district/district.component';
import { EmailComponent } from '../email/email.component';
//import { MaskitoModule } from '@maskito/angular';



@NgModule({
  declarations: [
    InputEmailComponent,
    InputPasswordComponent,
    ButtonLayoutComponent,
    PhoneNumberComponent,
    CardNumberComponent,
    DateBirthComponent,
    FullNameComponent,
    RegionComponent,
    DistrictComponent,
    EmailComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MaskitoModule
  ],
  exports: [
    EmailComponent,
    InputEmailComponent,
    InputPasswordComponent,
    ButtonLayoutComponent,
    PhoneNumberComponent,
    CardNumberComponent,
    DateBirthComponent,
    FullNameComponent,
    RegionComponent,
    DistrictComponent
  ]
})
export class SharedModule { }
