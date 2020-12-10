import { AuthService } from './../../../../services/auth.service';
import { FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

    signUpForm = this.fb.group({
      email: [null, Validators.required],
      password: [null, Validators.required],
      passwordConf: [null, Validators.required],
    });

  constructor(private fb: FormBuilder, private authService: AuthService) { }

  ngOnInit(): void {
  }

  onSubmit(): void{
    this.authService.registerUser(this.signUpForm.value);
  }
}
