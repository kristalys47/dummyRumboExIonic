import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LogincounselorPage } from './logincounselor';
import {ComponentsModule} from "../../components/components.module";

@NgModule({
  declarations: [
    LogincounselorPage,
  ],
  imports: [
    IonicPageModule.forChild(LogincounselorPage),
    ComponentsModule
  ],
})
export class LogincounselorPageModule {}
