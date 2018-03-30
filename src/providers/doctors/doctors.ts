import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as Constants from '../constants';


/*
  Generated class for the DoctorsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DoctorsProvider {

  header: HttpHeaders;

  constructor(public http: HttpClient, public api_token: Constants.UserPrefs) {
    this.header = new HttpHeaders({'access_key': Constants.accessKey});
  }

  getDoctors(data) {
    return new Promise(resolve => {
      this.http.get(Constants.apiUrl+'doctors', {params: data, headers: this.header}).subscribe(data => {
        data = Constants.translate(['name', 'bio', 'schedule'], data, this.api_token.lang);
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }
}
