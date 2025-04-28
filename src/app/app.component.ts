import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { ThemeSwitcherComponent } from "./theme-switcher/theme-switcher.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, ThemeSwitcherComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'portfolio';
}
