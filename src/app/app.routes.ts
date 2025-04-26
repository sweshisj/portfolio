import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProjectsComponent } from './projects/projects.component';
import { GamesComponent } from './games/games.component';
import { ProjectDetailsComponent } from './project-details/project-details.component';
import { TicTacToeComponent } from './games/tic-tac-toe/tic-tac-toe.component';
import { NumberGuessComponent } from './games/number-guess/number-guess.component';

export const routes: Routes = [
    { path: "", component: HomeComponent },
    { path: "projects", component: ProjectsComponent },
    { path: "project-details/:id", component: ProjectDetailsComponent },
    { path: "games", component: GamesComponent },
    { path: "tic-tac-toe", component: TicTacToeComponent },
    { path: "number-guess", component: NumberGuessComponent }
];
