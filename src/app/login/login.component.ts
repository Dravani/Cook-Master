import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginValue:boolean;

  constructor(){ 
    this.loginValue = true;
  }

  get LoginValue(){

    return this.loginValue;
  }
  

}
