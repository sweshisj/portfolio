import { Component } from '@angular/core';
import { ThemeSwitcherService } from '../services/theme-switcher.service';

@Component({
  selector: 'app-theme-switcher',
  templateUrl: './theme-switcher.component.html',
  styleUrls: ['./theme-switcher.component.scss']
})
export class ThemeSwitcherComponent {
  constructor(private themeService: ThemeSwitcherService) {}

  switchTheme(theme: string) {
    this.themeService.setTheme(theme);
  }
}