import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'courses-app';
  loggedIn: boolean = false;
  
  onLogin() {
    this.loggedIn = !this.loggedIn;
  }
}
