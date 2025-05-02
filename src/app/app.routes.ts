import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    { path: "", component: HomeComponent },
    { path: "projects", loadComponent: () => import('./projects/projects.component').then(c => c.ProjectsComponent) },
    { path: "games", loadComponent: () => import('./games/games.component').then(c => c.GamesComponent) },
    { path: "tic-tac-toe", loadComponent: () => import('./games/tic-tac-toe/tic-tac-toe.component').then(c => c.TicTacToeComponent) },
    { path: "number-guess", loadComponent: () => import('./games/number-guess/number-guess.component').then(c => c.NumberGuessComponent) }
];
