import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-name',
  templateUrl: './input-name.component.html',
  styleUrls: ['./input-name.component.scss'],
})
export class InputNameComponent  implements OnInit {

public firstName!:string;
public secondName!:string;

/*  public fullName =[
    {
      ariaLabel:true,
      placeHolder:"First Name",
      modelOf:"firstName",
      idOf:"firstName",
      minOf:"2",
      nameOf:"firstName",
    },
    {
      ariaLabel:true,
      placeHolder:"Last Name",
      modelOf:"lastName",
      idOf:"lastName",
      minOf:"4",
      nameOf:"lastName",
    }
  ]  
;  */
  constructor() { }

  ngOnInit() {}

}
