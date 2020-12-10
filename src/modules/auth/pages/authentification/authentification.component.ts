import { AuthService } from './../../../../services/auth.service';
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-authentification',
  templateUrl: './authentification.component.html',
  styleUrls: ['./authentification.component.scss']
})
export class AuthentificationComponent {
  addressForm = this.fb.group({
    email: [null, Validators.required],
    password: [null, Validators.required],
    shipping: [null]
  });

  constructor(
    private authService: AuthService,
    private fb: FormBuilder) {}

  onSubmit(): void {
    this.authService.loginUser(this.addressForm.value);
  }
}
