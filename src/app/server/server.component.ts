import {Component} from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html'
})
export class ServerComponent {
  shouldDisabled = true;

  constructor() {
    setTimeout(() => this.shouldDisabled = false, 2000);
  }
}
