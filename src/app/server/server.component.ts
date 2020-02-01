import {Component} from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html'
})
export class ServerComponent {
  shouldDisabled = true;
  numList = [1, 2, 3, 4];

  constructor() {
    setTimeout(() => this.shouldDisabled = false, 2000);
  }

  addNumValue() {
    const x = Math.ceil(Math.random() * 10);
    this.numList.push(x);
  }

  getBGColor() {
    const sz = this.numList.length;
    return (this.numList[sz - 1] % 2 === 0 ? 'green' : 'transparent');
  }
}
