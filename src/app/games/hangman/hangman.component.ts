import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-hangman',
  imports: [NgIf, NgFor],
  templateUrl: './hangman.component.html',
  styleUrl: './hangman.component.scss'
})
export class HangmanComponent {
  imageList: string[] = [
    "https://i.imgur.com/kReMv94.png",
    "https://i.imgur.com/UFP8RM4.png",
    "https://i.imgur.com/9McnEXg.png",
    "https://i.imgur.com/vNAW0pa.png",
    "https://i.imgur.com/8UFWc9q.png",
    "https://i.imgur.com/rHCgIvU.png",
    "https://i.imgur.com/CtvIEMS.png",
    "https://i.imgur.com/Z2mPdX0.png"
  ];

  winImage: string = "https://i.imgur.com/QYKuNwB.png";
  words: string[] = ['angular', 'typescript', 'javascript', 'developer', 'hangman'];
  selectedWord: string = '';
  guessedWord: string = '';
  incorrectGuesses: number = 0;
  maxIncorrectGuesses: number = this.imageList.length - 1;
  showInstructions: boolean = false;
  gameOver: boolean = false;
  alphabet = 'QWERTYUIOPASDFGHJKLZXCVBNM'.split('');
  guessedLetters: string[] = [];

  constructor() {
    this.newGame();
  }

  newGame() {
    this.selectedWord = this.words[Math.floor(Math.random() * this.words.length)]; // Select a random word from the list
    this.guessedWord = '_'.repeat(this.selectedWord.length); // Initialize guessed word with underscores
    this.incorrectGuesses = 0; // Reset incorrect guesses
    this.gameOver = false; // Reset game over flag
    this.guessedLetters = []; // Reset guessed letters
  }

  makeGuess(letter: string) {
    const letterUpper = letter.toUpperCase();
    const selectedWordUpper = this.selectedWord.toUpperCase();

    if (selectedWordUpper.includes(letterUpper)) {
      this.guessedWord = this.selectedWord.split('').map((char, index) => {
        return char.toUpperCase() === letterUpper ? char : this.guessedWord[index];
      }).join('');

      if (this.isWinner()) {
        this.gameOver = true; // Set gameOver flag if the player wins
      }
    } else {
      if (!this.guessedLetters.includes(letterUpper)) {
        this.incorrectGuesses++;
        this.guessedLetters.push(letterUpper);
      }
    }

    // Add the guessed letter to the list of disabled keys
    this.guessedLetters.push(letterUpper);

    // Check if the game is over after each guess
    this.gameOver = this.isGameOver();
  }

  getHangmanImage(): string {
    if (this.incorrectGuesses < this.imageList.length) {
      return this.imageList[this.incorrectGuesses];
    }
    return ''; // Return default image if needed
  }

  isGameOver(): boolean {
    return this.incorrectGuesses >= this.maxIncorrectGuesses || this.guessedWord === this.selectedWord;
  }
  isWinner(): boolean {
    return this.guessedWord === this.selectedWord;
  }
}
