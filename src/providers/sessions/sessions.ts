import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as Constants from '../constants';

/*
  Generated class for the SessionsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class SessionsProvider {

  header: HttpHeaders;
  user: any;

  constructor(public http: HttpClient, public api_token: Constants.UserPrefs) {
    this.user = {api_token: ''};
    this.header = new HttpHeaders({'access_key': Constants.accessKey});
  }

  createSession(data) {
    return new Promise((resolve, reject) => {
      this.http.post(Constants.apiUrl+'sessions', {session: data}, {headers: this.header})
        .subscribe(res => {
          this.user = res;
          this.api_token.apiToken = this.user.api_token;
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }
}
