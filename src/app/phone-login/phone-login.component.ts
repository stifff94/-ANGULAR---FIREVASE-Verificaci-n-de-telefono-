import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
@Component({
  selector: 'app-phone-login',
  templateUrl: './phone-login.component.html',
  styleUrls: ['./phone-login.component.scss']
})
export class PhoneLoginComponent implements OnInit {

  public recaptchaVerifier: firebase.auth.RecaptchaVerifier;
  public sent: boolean;
 
  constructor() {
    const firebaseConfig = {

      
      apiKey: "AIzaSyBahHQLq4PAERCEX2xZUgBoF3E8WxnboiU",
    authDomain: "auth-telefono.firebaseapp.com",
    databaseURL: "https://auth-telefono.firebaseio.com",
    projectId: "auth-telefono",
    storageBucket: "auth-telefono.appspot.com",
    messagingSenderId: "387751267462",
    appId: "1:387751267462:web:ac8854e13b2e7fc3ae5507",
    measurementId: "G-BVXCWS4L0B"
    };
    if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
    }
  }
 
  ngOnInit() {
    this.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container');
    
  }
 
  onSubmit(formData) {
    const appVerifier = this.recaptchaVerifier;
    console.log("el string es"+formData.phone_number)
    const phoneNumberString = "+"+formData.phone_number.toString();
    firebase.auth().signInWithPhoneNumber(phoneNumberString, appVerifier)
      .then((confirmationResult) => {
        this.sent = true;
        const verification = prompt('Ingresar codigo de verificacion');
        if (verification != null) {
          console.log(verification);
          confirmationResult.confirm(verification)
            .then((good) => {
              console.log("llego el codigo")
            })
            .catch((bad) => {
              console.log("Error ")
            });
        } else {
          console.log('No se ingreso ningun codigo de verificacion');
        }
      })
      .catch((err) => {
        console.log('sms not sent', err);
      });
  };

}
