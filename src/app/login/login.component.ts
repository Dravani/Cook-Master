import { Component } from '@angular/core';
import { FirebaseTSAuth } from 'firebasets/firebasetsAuth/firebaseTSAuth';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  state = AuthenticatorCompState.LOGIN;
  firebasetsAuth: FirebaseTSAuth;
  constructor(){
    this.firebasetsAuth = new FirebaseTSAuth();
  }
  

  onForgotPasswordClick(){
    this.state = AuthenticatorCompState.FORGOT_PASSWORD;

  }
  
  onCreateAccountClick(){
    this.state = AuthenticatorCompState.REGISTER;

  }
  
  onLoginClick(){
    this.state = AuthenticatorCompState.LOGIN;

  }

  isLoginState(){
    return this.state == AuthenticatorCompState.LOGIN;
  }

  isRegisterState(){
    return this.state == AuthenticatorCompState.REGISTER;
  }

  isForgotPasswordState(){
    return this.state == AuthenticatorCompState.FORGOT_PASSWORD;
  }

  getStateText(){
      switch(this.state){
      case AuthenticatorCompState.LOGIN:
        return "Login Page";
      case AuthenticatorCompState.REGISTER:
        return "Sign Up";
      case AuthenticatorCompState.FORGOT_PASSWORD:
        return "Forgot Password";
    }
}

  
}

export enum AuthenticatorCompState {
  LOGIN,
  REGISTER,
  FORGOT_PASSWORD
}
