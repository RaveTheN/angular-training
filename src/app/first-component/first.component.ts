import { Component } from '@angular/core';

@Component({
  selector: 'first',
  templateUrl: './first.component.html',
})
export class FirstComponent {
  fontColor = 'gold';
  sayHelloId = 1;
  canClick = true;
  message = 'W LA POTENZAAAAAAA!';

  sayMessage() {
    alert(this.message);
  }
  // The code in this class drives the component's behavior.
}
