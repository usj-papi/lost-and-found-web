import { Component, input, output } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-my-button',
  styleUrl: './my-button.css',
  templateUrl: './my-button.html',
})
export class MyButton {
  text = input.required<string>();
  clicked = output<number>();

  onClick() {
    this.clicked.emit(10);
  }
}
