import { NgClass, NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-tic-tac-toe',
  imports: [NgFor, NgClass, NgIf],
  templateUrl: './tic-tac-toe.component.html',
  styleUrl: './tic-tac-toe.component.scss'
})
export class TicTacToeComponent {
  showInstructions: boolean = false;
  currentPlayer: 'X' | 'O' = 'X';
  board: string[][] = [['', '', ''], ['', '', ''], ['', '', '']];
  winner: string | null = null;

  makeMove(row: number, col: number) {
    if (!this.board[row][col] && !this.winner) {
      this.board[row][col] = this.currentPlayer;
      if (this.checkWin()) {
        this.winner = this.currentPlayer;
      } else {
        this.currentPlayer = this.currentPlayer === 'X' ? 'O' : 'X';
      }
    }
  }

  checkWin(): boolean {
    // Check rows for a win
    for (let i = 0; i < 3; i++) {
      if (this.board[i][0] === this.currentPlayer && this.board[i][1] === this.currentPlayer && this.board[i][2] === this.currentPlayer) {
        return true;
      }
    }

    // Check columns for a win
    for (let j = 0; j < 3; j++) {
      if (this.board[0][j] === this.currentPlayer && this.board[1][j] === this.currentPlayer && this.board[2][j] === this.currentPlayer) {
        return true;
      }
    }

    // Check diagonals for a win
    if ((this.board[0][0] === this.currentPlayer && this.board[1][1] === this.currentPlayer && this.board[2][2] === this.currentPlayer) ||
      (this.board[0][2] === this.currentPlayer && this.board[1][1] === this.currentPlayer && this.board[2][0] === this.currentPlayer)) {
      return true;
    }

    return false;
  }

  replay() {
    this.board = [['', '', ''], ['', '', ''], ['', '', '']];
    this.currentPlayer = 'X';
    this.winner = null;
  }
}
