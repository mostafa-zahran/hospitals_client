import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';
import { HospitalsProvider } from "../../providers/hospitals/hospitals";
import { DepartmentPage } from "../department/department";

/**
 * Generated class for the HospitalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-hospital',
  templateUrl: 'hospital.html',
})
export class HospitalPage {

  search_params:any;
  hospitals:any;


  constructor(public navCtrl: NavController, public navParams: NavParams, public hospitalsProvider: HospitalsProvider) {
    this.search_params = navParams.get('choice');
    this.getHospitals();
  }

  getHospitals() {
    this.hospitalsProvider.getHospitals(this.search_params)
      .then(data => {
        this.hospitals = data;
      });
  }

  hospitalTapped(event, selected_hospital) {
    this.navCtrl.push(DepartmentPage, {choice: {hospital_id: selected_hospital.id}});
  }
}
