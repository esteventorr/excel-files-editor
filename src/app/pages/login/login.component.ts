import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  constructor(private authService: AuthService, private router: Router) {}

  onLogin(loginEvent: any): void {
    console.log('Login Event Received:', loginEvent);
    const response = this.authService.login(loginEvent);
    if (response) {
      this.router.navigate(['/edit']);
    } else {
      alert('Invalid credentials');
    }
  }
}
