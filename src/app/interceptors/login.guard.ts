import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class LoginGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {}

  canActivate(): boolean {
    if (this.authService.loginActivated()) {
      this.router.navigate(['/student/list']); // Redirect to home feed if logged in
      return false; // Prevent access to the login page
    }
    return true; // Allow access to the login page
  }
}
