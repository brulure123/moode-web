import { FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

    formEmail = this.fb.group({
      email: [null, Validators.required],
      password: [null, Validators.required],
      passwordConf: [null, Validators.required]
    });

    formIdentites = this.fb.group({
      nom: [null, Validators.required],
      postnom: [null, Validators.required],
      prenom: [null, Validators.required],
      adresse: [null, Validators.required]
    });

    myfilename: string;

    formCoordonnees = null;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  emailFormSubmit(): void {
  }

  identityFormSubmit(): void {

  }

}
