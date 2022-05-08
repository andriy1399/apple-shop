import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { from } from 'rxjs';
import { User } from '../interfaces/Auth';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private firestore: AngularFirestore) {}

  getById(id: string, onSuccess: (data: User) => void) {
    this.firestore
      .collection<User>('users')
      .ref.where('id', '==', id)
      .onSnapshot(document => document.forEach(user => onSuccess(user.data())));
  }
}
