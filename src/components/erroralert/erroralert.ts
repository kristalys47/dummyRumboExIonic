import { Component } from '@angular/core';
import { ErroralertProvider } from "../../providers/erroralert/erroralert";

/**
 * Generated class for the ErroralertComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'erroralertcmp',
  templateUrl: 'erroralert.html'
})
export class ErroralertComponent {
 constructor(private error: ErroralertProvider) {
  }
  error_msg1(): String {
    return this.error.error_msg;
  }
  error_display1(): Boolean {
    return this.error.error_display;
  }
  ngOnInit() {
  }


}
