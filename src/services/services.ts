import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { Events } from 'ionic-angular';

@Injectable()
export class ServiceProvider {
  constructor(public http: Http,
    protected events: Events) 
  {
    events.subscribe('app:userFetched', () => {
      console.log('app:userFetched event subscribed callback from services');
    });
  }

  private ENV = 'production';
  private TIME_OUT = 15000;
  private apiUrlLocal = 'http://192.168.0.118:8000';
  private apiUrlStaging = 'https://reqres.in';
  private apiUrlProduction = 'https://reqres.in';

  getApiUrl() {
    return this.getUrl() + '/api';
  }

  getUrl() {
    let url = '';
    switch (this.ENV) {
      case 'local':
        url = this.apiUrlLocal;
        break;
      case 'staging':
        url = this.apiUrlStaging;
        break;
      case 'production':
        url = this.apiUrlProduction;
        break;
      default:
        url = this.apiUrlLocal;
        break;
    }
    return url;
  }

  getTimeOut() {
    return this.TIME_OUT;
  }

}
