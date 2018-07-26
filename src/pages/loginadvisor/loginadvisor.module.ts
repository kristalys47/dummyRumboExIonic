import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LoginadvisorPage } from './loginadvisor';
import {ComponentsModule} from "../../components/components.module";

@NgModule({
  declarations: [
    LoginadvisorPage,
  ],
  imports: [
    IonicPageModule.forChild(LoginadvisorPage),
    ComponentsModule
  ],
})
export class LoginadvisorPageModule {}
