import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-games',
  imports: [NgFor],
  templateUrl: './games.component.html',
  styleUrl: './games.component.scss'
})
export class GamesComponent {
  games = [
    {
      id: 1,
      title: 'Tic-Tac-Toe',
      description: 'A classic game where two players take turns marking spaces in a 3x3 grid. The player who succeeds in placing three of their marks in a horizontal, vertical, or diagonal row wins the game.',
      image: 'assets/tic-tac-toe.jpg'
    },
    {
      id: 2,
      title: 'Number Guessing Game',
      description: 'Guess a random number between 1 and 100. The game will provide hints to help you determine whether the target number is higher or lower than your guess. Try to guess the number with the fewest attempts!',
      image: 'assets/number-guess.jpg'
    },

    {
      id: 3,
      title: 'Hangman',
      description: 'A word guessing game where you try to guess a hidden word by suggesting letters within a certain number of guesses. Each incorrect guess brings you closer to losing the game.',
      image: 'assets/hangman.jfif'
    }

  ];
  constructor(private router: Router) { }
  playGame(game: any) {
    switch (game.id) {
      case 1:
        this.router.navigate(['/tic-tac-toe']);
        break;
      case 2:
        this.router.navigate(['/number-guess']);
        break;
      case 3:
        this.router.navigate(['/hangman']);
        break;
      default:
        console.log('Game not found');
    }
    console.log('Playing', game.title);
  }
}
