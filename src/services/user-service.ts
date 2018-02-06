import 'rxjs/add/operator/map';
import 'rxjs/add/operator/timeout';
import { Injectable } from '@angular/core';
import { ServiceProvider } from './services';
import { Headers, RequestOptions } from '@angular/http';

@Injectable()
export class UserServiceProvider extends ServiceProvider {

  getUser(id) {
    console.log('fetching user...');

    let headers = new Headers({
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    });
    let options = new RequestOptions({ headers: headers });

    return new Promise((resolve, reject) => {
      this.http.get(this.getApiUrl() + '/users/' + id, options)
        .timeout(this.getTimeOut())
        .map(res => res.json())
        .subscribe(response => {
          this.events.publish('app:userFetched');
          console.log('app:userFetched event published');
          resolve(response);
        }, errors => {
          reject('Error fetching from API');
        });
    });
  }
}
