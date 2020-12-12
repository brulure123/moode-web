import { AuthService } from './../../../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-authentification',
  templateUrl: './authentification.component.html',
  styleUrls: ['./authentification.component.scss']
})
export class AuthentificationComponent implements OnInit{

  addressForm: FormGroup;

  constructor(
    private authService: AuthService,
    private fb: FormBuilder) {}

  ngOnInit(): void {
    this.addressForm = this.fb.group({
      email: new FormControl(null, Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ])),
      password: [null, Validators.required],
      shipping: [null]
    });
  }

  onSubmit(): void {
    this.authService.loginUser(this.addressForm.value);
  }
}
