import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule} from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { AuthloggedProvider } from '../providers/authlogged/authlogged';
import { LoginProvider } from '../providers/login/login';

import { HttpClientModule } from "@angular/common/http";
import { ErroralertProvider } from '../providers/erroralert/erroralert';


@NgModule({
  declarations: [
    MyApp
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthloggedProvider,
    LoginProvider,
    ErroralertProvider
  ]
})
export class AppModule {}
