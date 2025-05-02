import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeSwitcherService {
  currentTheme: string = 'light';

  constructor() { }

  setTheme(theme: string) {
    this.currentTheme = theme;
    if (typeof document !== 'undefined') {
      document.body.className = theme + '-theme';
    }
  }

  getTheme(): string {
    return this.currentTheme;
  }
}