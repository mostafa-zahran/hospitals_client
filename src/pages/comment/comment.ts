import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {CommentsProvider} from "../../providers/comments/comments";
import {UsersProvider} from "../../providers/users/users";
import {SigninPage} from "../signin/signin";

/**
 * Generated class for the CommentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-comment',
  templateUrl: 'comment.html',
})
export class CommentPage {

  public search_params: any;
  public comments: any;
  public my_comment: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public commentsProvider: CommentsProvider, public userProvider: UsersProvider) {
    this.search_params = navParams.get('choice');
    this.getComments();
  }

  getComments() {
    this.commentsProvider.getComments(this.search_params)
      .then(data => {
        this.comments = data;
      });
  }

  createComment() {
    if (this.userProvider.canSignin()) {
      this.navCtrl.push(SigninPage)
    }
    else {
      this.commentsProvider.createComment({
        doctor_id: this.search_params.doctor_id,
        comment: this.my_comment
      }).then((result) => {
        this.my_comment = '';
        this.navCtrl.pop();
      }, (err) => {
        console.log(err);
      });
    }
  }
}
