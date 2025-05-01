import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    { path: "", component: HomeComponent },
    { path: "projects", loadChildren: () => import('./projects/projects.component').then(c => c.ProjectsComponent) },
    { path: "games", loadChildren: () => import('./games/games.component').then(c => c.GamesComponent) },
    { path: "tic-tac-toe", loadChildren: () => import('./games/tic-tac-toe/tic-tac-toe.component').then(c => c.TicTacToeComponent) },
    { path: "number-guess", loadChildren: () => import('./games/number-guess/number-guess.component').then(c => c.NumberGuessComponent) }
];
