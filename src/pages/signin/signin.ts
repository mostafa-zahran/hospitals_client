import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { SessionsProvider } from "../../providers/sessions/sessions";
import {ProfilePage} from "../profile/profile";

/**
 * Generated class for the SigninPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-signin',
  templateUrl: 'signin.html',
})
export class SigninPage {

  public session:any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public sessionProvider: SessionsProvider) {
    this.session = {email: '', password: ''}
  }

  signIn() {
    this.sessionProvider.createSession(this.session).then((result) => {
      this.navCtrl.insert(1, ProfilePage);
      this.navCtrl.pop();
    }, (err) => {
      console.log(err);
    });
  }

}
