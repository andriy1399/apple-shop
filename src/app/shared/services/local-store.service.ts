import { Injectable } from '@angular/core';
import { from, Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { LocalStorage } from '../enums/localstorage';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  constructor() {}

  get<T>(key: LocalStorage): Observable<T | null> {
    return of(localStorage.getItem(key)).pipe(map(v => JSON.parse(v || '{}')));
  }

  setItem<T>(key: LocalStorage, item: T) {
    return of(localStorage.setItem(key, JSON.stringify(item)));
  }

  removeItem(key: LocalStorage) {
    return of(localStorage.removeItem(key));
  }

  clearAll() {
    return of(localStorage.clear());
  }
}
