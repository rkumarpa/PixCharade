import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { usercreds } from "../../models/interfaces/usercred";
import { AuthProvider} from "../../providers/auth/auth";
import { SignupPage } from "../signup/signup";
import { PasswordresetPage } from "../passwordreset/passwordreset";

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  credentials = {} as usercreds;

  constructor(public navCtrl: NavController, public navParams: NavParams, public authservice: AuthProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  signin(credentials : usercreds) {
    this.authservice.login(this.credentials).then((res:any) => {
      if (!res.code)
        this.navCtrl.setRoot('MainPage');
      else
        alert(res);
    })
  }
  passwordreset() {
    this.navCtrl.push('PasswordresetPage');
  }


  signup() {
    this.navCtrl.push('SignupPage');
  }
}
