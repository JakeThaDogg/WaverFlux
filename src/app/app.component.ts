import { Component } from '@angular/core';


import { GeneralService } from './general.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'WaverFlux';
  const THEME;

  constructor(
    private generalService: GeneralService,
  ) {}

  ngOnInit() {
    this.generalService.setTheme()
    // this.THEME = this.generalService.getTheme();
    this.generalService.currentTheme.subscribe(theme => this.THEME = theme);
    console.log(this.THEME)
  }

  switchTheme(theme: string): void {
    this.generalService.switchTheme(theme);
    // this.THEME = localStorage.getItem("theme");
  }
}
