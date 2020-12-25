import { AuthService } from './../services/auth.service';
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SignGuard implements CanActivate {

  constructor(
    private router: Router, 
    private authService: AuthService
  ){}

  canActivate(): boolean {
    if (this.authService.isLoggedIn) {
      this.router.navigate(['psychologue']);
      return false;
    }
    return true;
  }
}
