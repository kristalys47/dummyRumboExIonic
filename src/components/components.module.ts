import { NgModule } from '@angular/core';
import { LoginComponent } from './login/login';
import {IonicModule} from "ionic-angular";
@NgModule({
	declarations: [LoginComponent],
	imports: [IonicModule],
	exports: [LoginComponent]
})
export class ComponentsModule {}
