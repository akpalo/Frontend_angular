import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  userEmail: BehaviorSubject<string> = new BehaviorSubject<string>('');
    isLoggedIn: any;
  
  constructor(private afAuth: AngularFireAuth, private router: Router) {
    this.afAuth.authState.subscribe(user => {
      if(user) {
        this.userEmail.next(user.email || '');
      }
    });
  }

  login(email: string, password:string){
    this.afAuth.signInWithEmailAndPassword(email, password);
    this.userEmail.next(email);
    this.router.navigate(['admin/main'])
  }

  logout(){
    this.afAuth.signOut()
    this.userEmail.next("");
    this.router.navigate(['feedback']);
  }

  getLoggedInUser(): any{
    return this.afAuth.authState
  }

  checkLoggedInUser(){
    return this.userEmail;
  }
}

