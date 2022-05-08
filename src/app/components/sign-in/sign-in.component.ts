import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm } from '@angular/forms';
import { ModalService } from 'src/app/shared/services/modal.service';
import { AuthService } from '../../shared/services/auth.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
})
export class SignInComponent implements OnInit {
  credential = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });
  constructor(public modal: ModalService, public auth: AuthService) {}

  ngOnInit(): void {}
  onSubmit() {
    this.auth.signIn(this.credential.value);
  }
}
