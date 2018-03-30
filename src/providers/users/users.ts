import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as Constants from '../constants';

/*
  Generated class for the UsersProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UsersProvider {

  header: HttpHeaders;
  user: any;

  constructor(public http: HttpClient, public api_token: Constants.UserPrefs) {
    this.user = {email: '', first_name: '', last_name: '', api_token: '', id: 0};
    this.header = new HttpHeaders({'access_key': Constants.accessKey, 'api_token' : api_token.apiToken});
  }

  getUser() {
    this.header = new HttpHeaders({'access_key': Constants.accessKey, 'api_token' : this.api_token.apiToken});
    return new Promise(resolve => {
      this.http.get(Constants.apiUrl+'users/'+ this.user.id, {headers: this.header}).subscribe(data => {
        this.user = data;
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }

  saveUser(data) {
    return this.api_token.apiToken == '' ? this.createUser(data) : this.updateUser(data);
  }

  createUser(data) {
    return new Promise((resolve, reject) => {
      this.http.post(Constants.apiUrl+'users', {user: data}, {headers: this.header})
        .subscribe(res => {
          this.user = res;
          this.api_token.apiToken = this.user.api_token;
          this.header = new HttpHeaders({'access_key': Constants.accessKey, 'api_token' : this.user.api_token});
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

  updateUser(data) {
    return new Promise((resolve, reject) => {
      this.http.put(Constants.apiUrl+'users/' + this.user.id, {user: data}, {headers: this.header})
        .subscribe(res => {
          this.user = res;
          this.api_token.apiToken = this.user.api_token;
          this.header = new HttpHeaders({'access_key': Constants.accessKey, 'api_token' : this.user.api_token});
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

  canSignin() {
    return this.api_token.apiToken == ''
  }
}
