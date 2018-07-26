import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {User} from "../../user";
import {LoginProvider} from "../../providers/login/login";
import {ErroralertProvider} from "../../providers/erroralert/erroralert";

/**
 * Generated class for the LoginmentorPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-loginmentor',
  templateUrl: 'loginmentor.html',
})
export class LoginmentorPage {
  user: User = new User();



  constructor(public navCtrl: NavController, public navParams: NavParams, private auth: LoginProvider, private error: ErroralertProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  check() {
    this.auth.mentorlogin(this.user)
    .then((user) => {
      this.error.hidemessage();
      sessionStorage.setItem('userid', user.result.userid);
      sessionStorage.setItem('username', user.result.username);
      sessionStorage.setItem('email', user.result.email);
      sessionStorage.setItem('role', user.result.roles[0]);
      sessionStorage.setItem('token', user.auth_token);
      sessionStorage.setItem('logged', 'true');
      // The complete object
      // console.log(user);
      console.log(sessionStorage.getItem('token'));
      console.log(sessionStorage.getItem('userid'));
      console.log(sessionStorage.getItem('username'));
      console.log(sessionStorage.getItem('email'));
      console.log(sessionStorage.getItem('role'));
      this.navCtrl.setRoot('HomePage');
    })
    .catch((err) => {
      console.log(err);
      this.error.displaymessage("Incorrect credentials. Try again!");
    });
  }



}
