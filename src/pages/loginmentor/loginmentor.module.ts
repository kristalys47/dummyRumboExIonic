import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LoginmentorPage } from './loginmentor';
import {ComponentsModule} from "../../components/components.module";

@NgModule({
  declarations: [
    LoginmentorPage,
  ],
  imports: [
    IonicPageModule.forChild(LoginmentorPage),
    ComponentsModule
  ],
})
export class LoginmentorPageModule {}
