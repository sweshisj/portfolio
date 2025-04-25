import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProjectsComponent } from './projects/projects.component';
import { GamesComponent } from './games/games.component';

export const routes: Routes = [
    { path: "home", component: HomeComponent },
    { path: "projects", component: ProjectsComponent },
    { path: "games", component: GamesComponent }
];
