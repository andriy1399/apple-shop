import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from 'src/app/shared/services/auth.service';
import { ModalService } from 'src/app/shared/services/modal.service';

@Component({
  selector: 'app-sign-out',
  templateUrl: './sign-out.component.html',
  styleUrls: ['./sign-out.component.scss']
})
export class SignOutComponent implements OnInit {
  @Input() changeForm!: (showSignIn: boolean) => void;
  credential = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
  });
  constructor(public modal: ModalService, public auth: AuthService) {}

  ngOnInit(): void {}
  onSubmit() {
    console.log(this.credential.value, '----')
    this.modal.toggleModal(false);
  }
}
