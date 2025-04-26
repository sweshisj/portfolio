import { Component, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-number-guess',
  imports: [FormsModule],
  templateUrl: './number-guess.component.html',
  styleUrl: './number-guess.component.scss'
})
export class NumberGuessComponent {
  targetNumber: number;
  userGuess: number = 0;
  message: string = "";

  constructor() {
    this.targetNumber = Math.floor(Math.random() * 100) + 1;
  }

  checkGuess() {
    if (this.userGuess === this.targetNumber) {
      this.message = 'Congratulations! You guessed the correct number!';
    } else if (this.userGuess < this.targetNumber) {
      this.message = 'Try a higher number.';
    } else {
      this.message = 'Try a lower number.';
    }
  }
}
