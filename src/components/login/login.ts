import { Component } from '@angular/core';
import {NavController, NavParams} from "ionic-angular";
import {User} from "../../user";
import {LoginProvider} from "../../providers/login/login";

/**
 * Generated class for the LoginComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'logincomponent',
  templateUrl: 'logincmp.html'
})
export class LoginComponent {
  user: User = new User();

  constructor(public navCtrl: NavController, public navParams: NavParams, private auth: LoginProvider) {
  }

   check() {
    this.auth.login(this.user)
    .then((user) => {
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
    });
    //console.log(this.username, '   ',this.password);
  }


}
