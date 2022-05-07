import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  showModal: Subject<boolean> = new Subject();

  constructor() {}

  toggleModal(bool: boolean) {
    this.showModal.next(bool);
  }
}
