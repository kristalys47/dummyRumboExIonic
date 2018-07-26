import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LoginstudentPage } from './loginstudent';
import {ComponentsModule} from "../../components/components.module";

@NgModule({
  declarations: [
    LoginstudentPage,
  ],
  imports: [
    IonicPageModule.forChild(LoginstudentPage),
    ComponentsModule
  ],
})
export class LoginstudentPageModule {}
