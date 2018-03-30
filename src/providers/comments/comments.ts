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

  constructor(public http: HttpClient) {
    this.header = new HttpHeaders({'access_key': Constants.accessKey});
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
      this.http.post(Constants.apiUrl+'comments', JSON.stringify(data), {headers: this.header})
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }
}
