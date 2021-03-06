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

  constructor(public http: HttpClient, public api_token: Constants.UserPrefs) {
    this.header = new HttpHeaders({'access_key': Constants.accessKey});
  }

  getHospitals(data) {
    return new Promise(resolve => {
      this.http.get(Constants.apiUrl+'hospitals', {params: data, headers: this.header}).subscribe(data => {
        data = Constants.translate(['name'], data, this.api_token.lang);
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }

}
