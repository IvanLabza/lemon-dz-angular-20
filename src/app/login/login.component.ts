import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  inputValue: string = '';
  clearInput(): void {
    this.inputValue = '';
  }

  passwor: string = '';
  showPassword: boolean = false;

  togglePassword(): void {
    this.showPassword = !this.showPassword;
  }
  router: any;
  password: any;
  loginForm: any;
  authService: any;

  login() {
    if (this.loginForm.valid) {
      const username = this.loginForm.get('username').value;
      const password = this.loginForm.get('password').value;

      if (this.authService.checkCredentials(username, password)) {
        this.router.navigate(['/home']);
      } else {
        alert('Неправильный логин или пароль');
      }
    } else {
    }
  }
}

