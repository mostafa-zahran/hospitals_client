import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as Constants from '../constants';


/*
  Generated class for the HospitalsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class HospitalsProvider {

  header: HttpHeaders;

  constructor(public http: HttpClient) {
    this.header = new HttpHeaders({'access_key': Constants.accessKey});
  }

  getHospitals(data) {
    return new Promise(resolve => {
      this.http.get(Constants.apiUrl+'hospitals', {params: data, headers: this.header}).subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }

  getHospital(hospital_id) {
    return new Promise(resolve => {
      this.http.get(Constants.apiUrl+'hospitals/'+ hospital_id, {headers: this.header}).subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }

}
