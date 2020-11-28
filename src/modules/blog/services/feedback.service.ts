import { Feedback } from './../../../models/feedback.model';
import { AngularFirestore } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {

  constructor(private firestore: AngularFirestore) { }

  getFeedbacks(): any {
    return this.firestore.collection('feedbacks').snapshotChanges;
  }

  createFeedback(feedback: any): any {
    return this.firestore.collection('feedbacks').add(feedback);
  }
}
