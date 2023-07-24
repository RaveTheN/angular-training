import { Component } from '@angular/core';

@Component({
  selector: 'first',
  templateUrl: './first.component.html',
})
export class FirstComponent {
  fontColor = 'gold';
  sayHelloId = 1;
  canClick = true;
  message = 'Questo Componente ha caricato!';
  editable = "I'm read only";
  canEdit = false;

  onEditClick() {
    this.canEdit = !this.canEdit;
    if (this.canEdit) {
      this.editable = 'You can edit me!';
    } else {
      this.editable = "I'm read only!";
    }
  }

  sayMessage() {
    alert(this.message);
  }
  // The code in this class drives the component's behavior.
}
