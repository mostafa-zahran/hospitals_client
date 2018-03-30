import { Component } from '@angular/core';
import { ModalController } from "ionic-angular";
import { ProfilePage } from '../profile/profile';
import { HomePage } from '../home/home';
import { LangPage } from '../lang/lang'

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = ProfilePage;

  constructor(public modalCtrl: ModalController) {

  }

  openLangs(){
    let modal = this.modalCtrl.create(LangPage);
    modal.present();
  }
}
