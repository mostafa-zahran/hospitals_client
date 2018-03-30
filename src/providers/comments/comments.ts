import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as Constants from '../constants';


/*
  Generated class for the CommentsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class CommentsProvider {

  header: HttpHeaders;

  constructor(public http: HttpClient, public api_token: Constants.UserPrefs) {
    this.header = new HttpHeaders({'access_key': Constants.accessKey, 'api_token' : api_token.apiToken});
  }

  getComments(data) {
    return new Promise(resolve => {
      this.http.get(Constants.apiUrl+'comments', {params: data, headers: this.header}).subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }

  getComment(comment_id) {
    return new Promise(resolve => {
      this.http.get(Constants.apiUrl+'comments/'+ comment_id, {headers: this.header}).subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }

  createComment(data) {
    return new Promise((resolve, reject) => {
      this.header = new HttpHeaders({'access_key': Constants.accessKey, 'api_token' : this.api_token.apiToken});
      this.http.post(Constants.apiUrl+'comments', {comment: data}, {headers: this.header})
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }
}
