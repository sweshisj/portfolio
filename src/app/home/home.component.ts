import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  sendEmail() {
    window.open('https://mail.google.com/mail/?view=cm&fs=1&to=sweshisj@gmail.com', '_blank');
  }
}
