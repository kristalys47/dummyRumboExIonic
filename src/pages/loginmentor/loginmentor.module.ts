import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LoginmentorPage } from './loginmentor';

@NgModule({
  declarations: [
    LoginmentorPage,
  ],
  imports: [
    IonicPageModule.forChild(LoginmentorPage),
  ],
})
export class LoginmentorPageModule {}
