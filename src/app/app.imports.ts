import { Events } from 'ionic-angular';
import { HttpModule } from "@angular/http";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { IonicStorageModule } from '@ionic/storage';

export const MODULES = [
  CommonModule,
  HttpModule,
  FormsModule,
  IonicStorageModule
];

export const DIRECTIVES = [
];

export const PROVIDERS = [
  HttpModule,
  FormsModule,
  CommonModule,
  Events,
];

export const EXPORTS = [
  CommonModule,
  HttpModule,
  FormsModule,
];
