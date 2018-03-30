import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as Constants from '../constants';

/*
  Generated class for the SpecialtiesProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class SpecialtiesProvider {

  header: HttpHeaders;

  constructor(public http: HttpClient) {
    this.header = new HttpHeaders({'access_key': Constants.accessKey});
  }

  getSpecialties() {
    return new Promise(resolve => {
      this.http.get(Constants.apiUrl+'specialties', {headers: this.header}).subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }

  getSpecialty(specialty_id) {
    return new Promise(resolve => {
      this.http.get(Constants.apiUrl+'specialties/'+ specialty_id, {headers: this.header}).subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }
}
