import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private router: Router) {}

  login(role: string) {
    if (role === 'cliente') {
      this.router.navigate(['/cliente']);
    } else if (role === 'admin') {
      this.router.navigate(['/administrador']);
    }
  }
}
