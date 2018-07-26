import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LoginadminPage } from './loginadmin';
import {ComponentsModule} from "../../components/components.module";

@NgModule({
  declarations: [
    LoginadminPage,
  ],
  imports: [
    IonicPageModule.forChild(LoginadminPage),
    ComponentsModule
  ],
})
export class LoginadminPageModule {}
