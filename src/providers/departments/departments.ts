import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as Constants from '../constants';


/*
  Generated class for the DepartmentsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DepartmentsProvider {

  header: HttpHeaders;

  constructor(public http: HttpClient) {
    this.header = new HttpHeaders({'access_key': Constants.accessKey});
  }

  getDepartments(data) {
    return new Promise(resolve => {
      this.http.get(Constants.apiUrl+'departments', {params: data, headers: this.header}).subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }

  getDepartment(department_id) {
    return new Promise(resolve => {
      this.http.get(Constants.apiUrl+'departments/'+ department_id, {headers: this.header}).subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }

}
