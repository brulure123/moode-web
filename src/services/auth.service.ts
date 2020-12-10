import { Psychologue } from './../models/psychologue.model';
import { Injectable, NgZone } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  userData: any;

  constructor(
    private router: Router,
    private afAuth: AngularFireAuth,
    private afs: AngularFirestore,
    private ngZone: NgZone) {

    this.afAuth.authState.subscribe(user => {
      if (user){
        this.userData = user;
        localStorage.setItem('user', JSON.stringify(this.userData));
        JSON.parse(localStorage.getItem('user'));
      } else {
        localStorage.setItem('user', null);
        JSON.parse(localStorage.getItem('user'));
      }
    });
  }

   // Sign up with email/password
   async registerUser(value) {
    try {
       const result = await this.afAuth.createUserWithEmailAndPassword(value.email, value.password);
       this.setUserData(result.user);
       this.ngZone.run(() => {
        this.router.navigate(['auth']);
      });
     } catch (error) {
       window.alert(error.message);
     }
  }

  // Sign in with email/password
  async loginUser(value: any) {
    try {
      const result = await this.afAuth.signInWithEmailAndPassword(value.email, value.password);
      this.ngZone.run(() => {
        this.router.navigate(['psychologue']);
      });
      this.setUserData(result.user);
    } catch (error) {
      window.alert(error.message);
    }
  }

  // Sign out
  async logoutUser() {
    await this.afAuth.signOut();
    localStorage.removeItem('user');
    this.router.navigate(['auth']);
  }

  get isLoggedIn(): boolean {
    const user = JSON.parse(localStorage.getItem('user'));
    return (user !== null) ? true : false;
  }

   /* Setting up user data when sign in with username/password,
  sign up with username/password and sign in with social auth
  provider in Firestore database using AngularFirestore + AngularFirestoreDocument service */
  setUserData(user): any {
    const userRef: AngularFirestoreDocument<any> = this.afs.doc(`psychologues/${user.uid}`);
    const userData: Psychologue = {
      uid: user.uid,
      email: user.email,
      genre: '',
      role: 'PSY',
      status: false,
      nom: '',
      postNom: '',
      photoUrl: '',
      phoneNumber: user.phoneNumber,
      adresse: '',
      coordinates: null
    };
    return userRef.set(userData, {
      merge: true
    });
  }
}
