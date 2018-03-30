import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { UsersProvider } from "../../providers/users/users";
import { HomePage } from "../home/home";
import { SigninPage } from "../signin/signin"

@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html'
})
export class ProfilePage {

  public user:any;

  constructor(public navCtrl: NavController, public userProvider: UsersProvider) {
    this.user = userProvider.user;
    this.getUser();
  }

  getUser() {
    this.userProvider.getUser()
      .then(data => {
        this.user = data;
      });
  }

  saveUser() {
    this.userProvider.saveUser(this.user).then((result) => {
      console.log(result);
      this.navCtrl.push(HomePage);
    }, (err) => {
      console.log(err);
    });
  }

  openSignin(){
    this.navCtrl.push(SigninPage);
  }

  canSignin() {
    return this.userProvider.canSignin();
  }
}
