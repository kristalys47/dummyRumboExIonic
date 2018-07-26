import { Injectable } from '@angular/core';

/*
  Generated class for the ErroralertProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ErroralertProvider {
  private _error_msg: String = '';
  private _error_display: Boolean = false;

  constructor() { }

  displaymessage(msg: String): void{
    this._error_msg = msg;
    this._error_display = true;
  }

  get error_msg(): String {
    return this._error_msg;
  }

  get error_display(): Boolean {
    return this._error_display;
  }

  hidemessage(): void {
    this._error_msg = '';
    this._error_display = false;
  }

}
