import { Component, OnInit } from '@angular/core';
import { MaskitoElementPredicateAsync, MaskitoOptions } from '@maskito/core';

@Component({
  selector: 'app-phone-number',
  templateUrl: './phone-number.component.html',
  styleUrls: ['./phone-number.component.scss'],
})
export class PhoneNumberComponent  implements OnInit {

  readonly phoneMask: MaskitoOptions = {
    mask: ['+', '2','5','5',' ',/\d/,/\d/,/\d/,'-', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/],
  };
  readonly maskPredicate: MaskitoElementPredicateAsync = async (el) => (el as HTMLIonInputElement).getInputElement();


  constructor() { }

  ngOnInit() {}

}
