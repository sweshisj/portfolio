import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-tic-tac-toe',
  imports: [NgFor],
  templateUrl: './tic-tac-toe.component.html',
  styleUrl: './tic-tac-toe.component.scss'
})
export class TicTacToeComponent {
  currentPlayer: 'X' | 'O' = 'X';
  board: string[][] = [['', '', ''], ['', '', ''], ['', '', '']];
  makeMove(row: number, col: number) {
    if (!this.board[row][col]) {
      this.board[row][col] = this.currentPlayer;
      this.currentPlayer = this.currentPlayer === 'X' ? 'O' : 'X';
    }
  }
}
