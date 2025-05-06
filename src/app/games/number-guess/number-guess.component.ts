import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import 'bootstrap/dist/css/bootstrap.min.css';

@Component({
  selector: 'app-number-guess',
  imports: [FormsModule, NgIf],
  templateUrl: './number-guess.component.html',
  styleUrl: './number-guess.component.scss'
})
export class NumberGuessComponent {
  userGuess: number = 0;
  targetNumber: number;
  message: string = "";
  showInstructions: boolean = false;
  
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
