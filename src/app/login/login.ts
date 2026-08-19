import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  public email = '';
  public password = '';
  public loginFailed = false;
  private router = inject(Router);

  login() {
    const users = [
      { email: 'Saush@fake.com', password: '12345' },
      { email: 'alice@test.com', password: 'pass1' },
      { email: 'bob@test.com', password: 'pass2' },
    ];

    let isAuthenticated = false;

    for (let i = 0; i < users.length; i++) {
      if (this.email === users[i].email && this.password === users[i].password) {
        isAuthenticated = true;
        break;
      }
    }

    if (isAuthenticated) {
      this.loginFailed = false;
      localStorage.setItem('userAuthenticated', "valid");
      console.log("Valid")
      this.router.navigate(['/home']);
    } else {
      this.loginFailed = true;
      console.log('Log in failed');
    }
  }

}
