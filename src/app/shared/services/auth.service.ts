import { HttpClient } from '@angular/common/http';
import { Injectable, NgZone } from '@angular/core';
import {
  Auth,
  authState,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from '@angular/fire/auth';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import {
  AngularFirestore,
  AngularFirestoreDocument,
} from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { forkJoin, from, pluck, switchMap } from 'rxjs';
import { LocalStorage } from '../enums/localstorage';
import { SignInCredentials, SignUpCredentials, User } from '../interfaces/Auth';
import { LocalStorageService } from './local-store.service';
import { UserService } from './user.service';
import { Role } from '../enums/role';
import { Page } from '../enums/page';
import { ModalService } from './modal.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  readonly isLoggedIn$ = authState(this.auth);

  constructor(
    private auth: Auth,
    private user: UserService,
    private firestore: AngularFirestore,
    private localS: LocalStorageService,
    private router: Router,
  ) {}

  getCurrentUser() {
    return this.auth.currentUser!;
  }

  signIn({ email, password }: SignInCredentials) {
    return from(
      signInWithEmailAndPassword(this.auth, email, password)
    ).subscribe(userCred => {
      this.user.getById(userCred.user.uid, (data: User) => {
        this.localS.setItem(LocalStorage.USER, data);
        Role.ADMIN === data.role && this.router.navigate([Page.ADMIN]);
      });
    });
  }

  signUp({ email, password, firstName, lastName }: SignUpCredentials) {
    return from(
      createUserWithEmailAndPassword(this.auth, email, password)
    ).pipe(
      switchMap(({ user }) => {
        const userObj: User = {
          email,
          firstName,
          lastName,
          id: user.uid,
          role: 'user',
        };
        return forkJoin([this.firestore.collection('users').add(userObj)]);
      })
    );
  }

  signOut() {
    return from(this.auth.signOut());
  }
}
