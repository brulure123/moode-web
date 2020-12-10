import { Psychologue } from './../models/psychologue.model';
import { AngularFirestore } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PsychologueService {

  private psychologues: Psychologue[];
  result;

  constructor(private firestore: AngularFirestore) { }

  getPsychologueById(uid: string): any{
    return this.firestore.collection('psychologues').doc(uid)
      .valueChanges()
      .subscribe(item => {
        return item;
      });
  }

  getPsychologue(): Psychologue[] {
    this.firestore.collection<Psychologue>('psychologues').snapshotChanges().subscribe(data => {
      this.psychologues = data.map( a => {
        return {
          uid: a.payload.doc.id,
          ...a.payload.doc.data()
        } as Psychologue;
      });
      this.result = this.psychologues;
    });
    return this.result;
  }
}

