import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LoginadvisorPage } from './loginadvisor';

@NgModule({
  declarations: [
    LoginadvisorPage,
  ],
  imports: [
    IonicPageModule.forChild(LoginadvisorPage),
  ],
})
export class LoginadvisorPageModule {}
