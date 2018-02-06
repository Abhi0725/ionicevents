import { HomePage } from './home';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SharedModule } from '../../app/shared.module';
import { UserServiceProvider } from '../../services/user-service';

@NgModule({
  declarations: [
    HomePage,
  ],
  imports: [
    SharedModule,
    IonicPageModule.forChild(HomePage),
  ],
  providers: [
    UserServiceProvider
  ]
})
export class HomePageModule { }
