import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { GovernoratesProvider } from "../../providers/governorates/governorates";
import { SpecialtiesProvider } from "../../providers/specialties/specialties";
import { HospitalPage } from "../hospital/hospital"

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  governorates:any;
  specialties:any;
  choice: any;

  constructor(public navCtrl: NavController, public governoratesProvider: GovernoratesProvider, public specialtiesProvider: SpecialtiesProvider) {
    this.getGovernorates();
    this.getSpecialties();
    this.choice = {governorate_id: '', specialty_id: ''};
  }

  getGovernorates() {
    this.governoratesProvider.getGovernorates()
      .then(data => {
        this.governorates = data;
        this.choice.governorate_id = this.governorates[0].id
      });
  }

  getSpecialties() {
    this.specialtiesProvider.getSpecialties()
      .then(data => {
        this.specialties = data;
        this.choice.specialty_id = this.specialties[0].id
      });
  }

  goToHospitals() {
    this.navCtrl.push(HospitalPage, {choice: this.choice});
  }
}
