import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { UserServiceProvider } from '../../services/user-service';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  user: any;

  constructor(
    public navCtrl: NavController,
    public userService: UserServiceProvider) 
  {
    this.user = {};
    let id = Math.floor(Math.random() * 10) + 1;
    this.fetchUser(id);
  }

  fetchUser(id) {
    this.userService.getUser(id)
      .then((response: any) => {
        this.user = response.data;
        console.log(this.user);
      }, errors => {
        console.log('error fetching data from api');
      });
  }
}
