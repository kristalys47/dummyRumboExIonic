import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LoginprofessorPage } from './loginprofessor';
import {ComponentsModule} from "../../components/components.module";

@NgModule({
  declarations: [
    LoginprofessorPage,
  ],
  imports: [
    IonicPageModule.forChild(LoginprofessorPage),
    ComponentsModule
  ],
})
export class LoginprofessorPageModule {}
