import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { StorageService } from '../services/storage.service';

@Component({
  selector: 'app-profile',
  imports: [FormsModule],
  templateUrl: './profile.html',
  styleUrl: './profile.css',
})
export class Profile implements OnInit {
  public username = '';
  public birthdate = '';
  public age = '';
  public email = '';
  public saved = false;
  private router = inject(Router);
  private storageService = inject(StorageService);

  ngOnInit() {
    const user = this.storageService.getUser();
    if (!user) {
      this.router.navigate(['/login']);
      return;
    }
    this.username = user.username;
    this.birthdate = user.birthdate;
    this.age = user.age;
    this.email = user.email;
  }

  save() {
    const user = {
      username: this.username,
      birthdate: this.birthdate,
      age: this.age,
      email: this.email,
    };
    this.storageService.setUser(user);
    this.saved = true;
    setTimeout(() => { this.saved = false; }, 2000);
  }
}
