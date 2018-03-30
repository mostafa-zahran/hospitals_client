import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { DepartmentsProvider } from "../../providers/departments/departments";
import { DoctorPage } from "../doctor/doctor";

/**
 * Generated class for the DepartmentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-department',
  templateUrl: 'department.html',
})
export class DepartmentPage {

  public search_params:any;
  public departments:any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public departmentsProvider: DepartmentsProvider) {
    this.search_params = navParams.get('choice');
    this.getDepartments();
  }

  getDepartments() {
    this.departmentsProvider.getDepartments(this.search_params)
      .then(data => {
        this.departments = data;
      });
  }

  departmentTapped(event, selected_department) {
    this.navCtrl.push(DoctorPage, {choice: {department_id: selected_department.id}});
  }
}
