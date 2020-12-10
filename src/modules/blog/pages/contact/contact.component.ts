import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators } from '@angular/forms';
import { FeedbackService } from 'src/services/feedback.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  feedbackForm = this.fb.group({
    nom: ['', Validators.required],
    prenom: ['', Validators.required],
    email: ['', Validators.required],
    message: ['', Validators.required]
  });

  constructor(private fb: FormBuilder, private feedbackService: FeedbackService) { }

  ngOnInit(): void {
  }

  onSubmit(): any {
    const feedback = {
      nom: this.feedbackForm.value.nom,
      prenom: this.feedbackForm.value.prenom,
      email: this.feedbackForm.value.email,
      message: this.feedbackForm.value.message
    };
    this.feedbackService.createFeedback(feedback);
  }
}
