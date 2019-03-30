import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GeneralService {

  private themeSource = new BehaviorSubject(localStorage.getItem("theme"));
  currentTheme = this.themeSource.asObservable();

  constructor() { }

  setTheme(): void {
    let selectedTheme = localStorage.getItem("theme");
    if (selectedTheme === undefined || !selectedTheme) {
      localStorage.setItem("theme", 'original');
    }
  }

  switchTheme(theme: string): void {
    let selectedTheme = localStorage.getItem("theme");
    if (selectedTheme !== theme) {
       localStorage.setItem("theme", theme);
    }
    this.themeSource.next(theme);
  }
  
}
