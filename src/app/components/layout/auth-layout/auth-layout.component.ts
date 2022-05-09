import { ModalService } from './../../../shared/services/modal.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-auth-layout',
  templateUrl: './auth-layout.component.html',
  styleUrls: ['./auth-layout.component.scss']
})
export class AuthLayoutComponent implements OnInit, OnDestroy {
  modalSubscription!: Subscription;
  showModal: boolean = false;
  header = 'Sign in';
  isSignIn = true;
  constructor(public modal: ModalService) { }

  ngOnInit(): void {
    this.modalSubscription = this.modal.showModal.subscribe(show => this.showModal = show)
  }
  changeModalForm = (showSignIn: boolean) => {
    this.header = showSignIn ? 'Sign in' : 'Sign out';
    this.isSignIn = showSignIn;
  }
  ngOnDestroy(): void {
    this.modalSubscription.unsubscribe();
  }
}
