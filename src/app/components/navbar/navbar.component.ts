import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  isDarkModeEnabled: boolean = false;
  currentTime: string = '';

  ngOnInit() {
    this.setTheme();

    setInterval(() => {
      const date = new Date();
      this.currentTime = date.toUTCString();
    }, 1000);
  }

  setTheme() {
    if (this.isDarkModeEnabled) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.add('light');
    }
  }



  toggleDarkMode() {
    this.isDarkModeEnabled = !this.isDarkModeEnabled;
    document.body.classList.toggle('dark');
    document.body.classList.toggle('light');
  }
}