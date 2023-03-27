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
  
  onResetClick(resetEmail: HTMLInputElement) {
    let email = resetEmail.value;
    if(this.isNotEmpty(email)) {
      this.firebasetsAuth.sendPasswordResetEmail(
        {
          email: email,
          onComplete: (err) => {
            alert("Reset email has been sent");
          }
        }
      );
    }
  }

  onLogin(
    loginEmail: HTMLInputElement,
    loginPassword: HTMLInputElement
  ) {
    let email = loginEmail.value;
    let password = loginPassword.value;

    if(this.isNotEmpty(email) && this.isNotEmpty(password)) {
      this.firebasetsAuth.signInWith(
        {
          email: email,
          password: password,
          onComplete: (uc) => {

          },
          onFail: (err) => {
            alert(err);
          }
        }
      );
    }

  }

  onRegisterClick(
    registerEmail: HTMLInputElement,
    registerPassword: HTMLInputElement,
    registerConfirmPassword: HTMLInputElement
  ) {
    let email = registerEmail.value;
    let password = registerPassword.value;
    let confirmPassword = registerConfirmPassword.value;

    if(
      this.isNotEmpty(email) &&
      this.isNotEmpty(password) &&
      this.isNotEmpty(confirmPassword) &&
      this.isMatch(password, confirmPassword)
    ){
      this.firebasetsAuth.createAccountWith(
        {
          email: email,
          password: password,
          onComplete: (uc) => {
            alert("Account Created");
            registerEmail.value = "";
            registerPassword.value = "";
            registerConfirmPassword.value = "";
          },
          onFail: (err) => {
            alert("Failed to create account.");
          }
        }
      );
    }


  }

  isNotEmpty(text: string) {
    return text != null && text.length > 0;
  }

  isMatch(text: string, comparedWith: string) {
    return text == comparedWith;
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
