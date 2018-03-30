import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {UserPrefs} from "../../providers/constants";
import { ViewController, App } from 'ionic-angular';
import { TabsPage } from "../tabs/tabs";

@Component({
  selector: 'page-lang',
  templateUrl: 'lang.html',
})
export class LangPage {

  langs: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public user_prefs: UserPrefs, public viewCtrl: ViewController, public appCtrl: App) {
    this.langs = [{value: 'en', title: 'English'}, {value: 'ar', title: 'Arabic'}]
  }

  setLang(event, lang){
    this.user_prefs.lang = lang;
    this.viewCtrl.dismiss().then(() => {
      this.appCtrl.getRootNav().push(TabsPage);
    });
  }
}
