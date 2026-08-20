import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { StorageService } from '../services/storage.service';

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
  private authService = inject(AuthService);
  private storageService = inject(StorageService);

  login() {
    this.authService.login(this.email, this.password).subscribe(
      (response) => {
        if (response.valid) {
          this.loginFailed = false;
          const user = {
            username: response.username,
            birthdate: response.birthdate,
            age: response.age,
            email: response.email,
          };
          this.storageService.setUser(user);
          this.router.navigate(['/home']);
        } else {
          this.loginFailed = true;
        }
      },
      (err) => {
        console.error('Server error:', err.error);
        this.loginFailed = true;
      },
    );
  }
}
