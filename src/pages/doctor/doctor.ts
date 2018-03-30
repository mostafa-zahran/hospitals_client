import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { DoctorsProvider } from "../../providers/doctors/doctors";


/**
 * Generated class for the DoctorPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-doctor',
  templateUrl: 'doctor.html',
})
export class DoctorPage {

  public search_params:any;
  public doctors:any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public doctorsProvider: DoctorsProvider) {
    this.search_params = navParams.get('choice');
    this.getDoctors();
  }

  getDoctors() {
    this.doctorsProvider.getDoctors(this.search_params)
      .then(data => {
        this.doctors = data;
      });
  }

  doctorTapped(event, selected_doctor){
    //this.navCtrl.push(CommentPage, {choice: {doctor_id: selected_doctor.id}});
  }
}
